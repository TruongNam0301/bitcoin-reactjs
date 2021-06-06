import axiosClient from "./axiosClient";

const holcApi = {
  get: (params) => {
    const url = "/statistic/get/ethereum";
    return axiosClient.get(url, { params });
  },
};

export default holcApi;
