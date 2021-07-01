import React, { Component } from "react";
import holcApi from "../../../api/holcApi";
import CanvasJSReact from "../../../assets/js/canvasjs.stock.react";
import { Spin } from "antd";
import styled from "styled-components";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

const StyledDivLoading = styled.div`
  width: 100%;
  height: 550px;
  margin: auto;
`;
class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPoints1: [],
      dataPoints2: [],
      dataPoints3: [],
      isLoaded: false,
      urldownload: "",
    };
    this.drawChart = this.drawChart.bind(this);
  }

  drawChart = async (name) => {
    try {
      const response = await holcApi.get(name);
      var dps1 = [],
        dps2 = [],
        dps3 = [];
      let data = response.data.data;
      for (var i = 0; i < data.length; i++) {
        dps1.push({
          x: new Date(data[i].date),
          y: [
            Number(data[i].open),
            Number(data[i].high),
            Number(data[i].low),
            Number(data[i].close),
          ],
        });
        dps2.push({
          x: new Date(data[i].date),
          y: Number(data[i].volume),
        });
        dps3.push({ x: new Date(data[i].date), y: Number(data[i].close) });
      }
      this.setState({
        isLoaded: true,
        dataPoints1: dps1,
        dataPoints2: dps2,
        dataPoints3: dps3,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    const { name } = this.props;
    const date = Date.parse(new Date());
    let str =
      "https://8ed6a666c986.ngrok.io/csv/statistic?coin_id=" +
      name +
      "&end=" +
      date.toString();
    this.setState({ urldownload: str });
    this.drawChart(name);
  }

  componentDidUpdate(prevProps, prevState) {
    const { name } = this.props;
    const date = Date.parse(new Date());
    if (prevProps.name !== name) {
      let str =
        "https://8ed6a666c986.ngrok.io/csv/statistic?coin_id=" +
        name +
        "&end=" +
        date.toString();
      this.setState({ urldownload: str });
      this.setState({ isLoaded: false });
      this.drawChart(name);
    }
  }
  buttonDown(params) {
    return (
      <a href="https://8ed6a666c986.ngrok.io/csv/statistic_trending_last_month">
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size="large"
        >
          Download
        </Button>
      </a>
    );
  }

  render() {
    const options = {
      theme: "light2",
      title: {
        text: this.props.name,
      },
      subtitles: [
        {
          text: "Price-Volume Trend",
        },
      ],
      charts: [
        {
          axisX: {
            lineThickness: 5,
            tickLength: 0,
            labelFormatter: function (e) {
              return "";
            },
            crosshair: {
              enabled: true,
              snapToDataPoint: true,
              labelFormatter: function (e) {
                return "";
              },
            },
          },
          axisY: {
            title: "Coin Price",
            prefix: "$",
            tickLength: 0,
          },
          toolTip: {
            shared: true,
          },
          data: [
            {
              name: "Price (in USD)",
              yValueFormatString: "$#,###.##",
              type: "candlestick",
              dataPoints: this.state.dataPoints1,
            },
          ],
        },
        {
          height: 100,
          axisX: {
            crosshair: {
              enabled: true,
              snapToDataPoint: true,
            },
          },
          axisY: {
            title: "Volume",
            prefix: "$",
            tickLength: 0,
          },
          toolTip: {
            shared: true,
          },
          data: [
            {
              name: "Volume",
              yValueFormatString: "$#,###.##",
              type: "column",
              dataPoints: this.state.dataPoints2,
            },
          ],
        },
      ],
      navigator: {
        data: [
          {
            dataPoints: this.state.dataPoints3,
          },
        ],
        slider: {
          minimum: new Date("2021-05-01"),
          maximum: new Date(),
        },
      },
    };
    const containerProps = {
      width: "100%",
      height: "550px",
      margin: "auto",
    };
    return (
      <div>
        <div>
          {
            // Reference: https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
            this.state.isLoaded ? (
              <div>
                <CanvasJSStockChart
                  containerProps={containerProps}
                  options={options}
                  /* onRef = {ref => this.chart = ref} */
                />

                <a href={this.state.urldownload}>
                  <Button
                    type="primary"
                    shape="round"
                    icon={<DownloadOutlined />}
                    size="large"
                  >
                    Download
                  </Button>
                </a>
              </div>
            ) : (
              <Spin tip="Loading...">
                <StyledDivLoading />
              </Spin>
            )
          }
        </div>
      </div>
    );
  }
}
export default Chart;
