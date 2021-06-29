import axiosClient from "./axiosClient";

const holcApi = {
  get: (params) => {
    const url = `statistic/get/${params}`;
    return axiosClient.get(url);
  },
};

export default holcApi;
