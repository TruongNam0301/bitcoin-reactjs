import axiosClient from "./axiosClient";

const holcToday = {
  get: (params) => {
    const url = `/coin/info/${params}`;
    return axiosClient.get(url);
  },
};

export default holcToday;
