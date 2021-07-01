import axiosClient from "./axiosClient";

const userApi = {
  post: ({ email, password }) => {
    // const url = `/user/authenticate`;
    // return axiosClient.post(url, { username, password });
    if (email === "admin@gmail.com" && password === "1234") {
      return {
        email: "nam@gmail.com",
        name: "Truong Nam",
        id: "kh1",
      };
    } else {
      return { error: true };
    }
  },
};

export default userApi;
