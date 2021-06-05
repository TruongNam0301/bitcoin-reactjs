import axiosClient from "./axiosClient";

const holcApi = {
  get: (params) => {
    // const url = "/statistic/get/ethereum";
    const url = "/ltcusd2018.json";
    return axiosClient.get(url, { params });
  },
};

export default holcApi;
