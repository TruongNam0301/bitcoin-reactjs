import axios from "axios";
import axiosClient from "./axiosClient";

const exchangeInforApi = {
  get: () => {
    const url = "/exchange/get_list";
    return axiosClient.get(url);
  },
};

export default exchangeInforApi;
