import axiosClient from "./axiosClient";

const topHotCoin = {
  get: () => {
    const url = "trending/get_today";
    return axiosClient.get(url);
  },
};

export default topHotCoin;
