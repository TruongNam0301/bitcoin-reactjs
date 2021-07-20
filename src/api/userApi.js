//import axiosClient from "./axiosClient";

const userApi = {
  post: ({ email, password }) => {
    // const url = `/user/authenticate`;
    // return axiosClient.post(url, { username, password });
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(
      (obj) => obj.email === email && obj.password === password
    );
    if (user) {
      return user;
    } else {
      return { error: true };
    }
  },
};

export default userApi;
