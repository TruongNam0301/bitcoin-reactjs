import axiosClient from "./axiosClient";

const priceRealTime = {
  get: (params) => {
    const url = `/coin/get_coin_real_time?id=${params}`;
    return axiosClient.get(url);
  },
};
export default priceRealTime;
