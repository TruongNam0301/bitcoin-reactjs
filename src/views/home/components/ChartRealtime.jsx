import axios from "axios";
import React, { Component } from "react";
import priceRealTime from "../../../api/priceRealTimeApi";
import CanvasJSReact from "../../../assets/js/canvasjs.stock.react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
//var dps = []; //dataPoints.
var yVal = 15;
var updateInterval = 10000;
class ChartRealtime extends Component {
  constructor() {
    super();
    this.state = {
      idSetinterval: null,
      dpschart: [],
      xVal: 0,
    };
    this.updateChart = this.updateChart.bind(this);
  }

  componentDidMount() {
    let id = setInterval(this.updateChart, updateInterval);
    this.setState({ idSetinterval: id });
  }

  async updateChart() {
    const { name, dpsProps } = this.props;
    const response = await priceRealTime.get(name);
    const val = response.data.data.price;
    console.log(val);
    const dps = this.state.dpschart;
    const yVal = val;
    dps.push({ x: this.state.xVal, y: yVal });
    this.setState({ xVal: this.state.xVal + 1 });
    if (dps.length > 10) {
      dps.shift();
    }
    this.setState({ dpschart: dps });
    this.chart.render();
  }
  componentWillUnmount() {
    clearInterval(this.state.idSetinterval);
    this.setState({ idSetinterval: null });
  }
  // componentDidUpdate(preProps, preState) {
  //   const { name } = this.props;
  //   if (preProps !== name) {
  //     this.setState({ dpschart: [] });
  //   }
  // }
  render() {
    const options = {
      title: {
        text: "Dynamic Line Chart",
      },
      data: [
        {
          type: "line",
          dataPoints: this.state.dpschart,
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
export default ChartRealtime;
