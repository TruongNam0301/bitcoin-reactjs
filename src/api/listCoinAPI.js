import axiosClient from "./axiosClient";

const listCoin = {
  get: (params) => {
    const url = "/coin/get-list";
    return axiosClient.get(url, { params });
  },
};

export default listCoin;
