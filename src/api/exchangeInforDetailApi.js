import axiosClient from "./axiosClient";

const exchangeInForDetail = {
  get: (params) => {
    const url = `/exchange/get_today?id=${params}`;
    return axiosClient.get(url);
  },
};
export default exchangeInForDetail;
