import { UserModel } from "@/features/userSlice";
import request from "./request";

const UserApi = {
  login: async (data: any) => {
    return await request("/api/login", {
      method: "POST",
      data: data,
    });
  },

  addUser: async (data: UserModel) => {
    return await request("/api/addUser", {
      method: "POST",
      data: data,
    });
  },
  getUser: async () => {
    return await request("/api/getUser", {
      method: "GET",
    });
  },
  deleteUser: async (parm: { number: string; courseId: string }) => {
    const parmStr = Object.entries(parm).reduce((pre, next, index) => {
      const prefix = index === 0 ? "" : "&";
      return `${pre}${prefix}${next[0]}=${next[1]}`;
    }, "?");

    return await request(`/api/deleteUser${parmStr}`, {
      method: "DELETE",
    });
  },
  checkCurrentUser: async () => {
    return await request(`/api/checkUser`, {
      method: "GET",
    });
  },
};

export default UserApi;
