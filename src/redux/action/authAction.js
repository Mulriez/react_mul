import Cookies from "js-cookie";
import { authMeProcess, forgotProses, login, register, resetProses } from "../../API/auth";

export function authLogin(payload) {
  return async (dispatch) => {
    try {
      let response = await login(payload);
      let data = response.data;
      dispatch({
        type: "login",
        name: data?.user?.name,
        email: data?.user?.email,
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

export function authRegister(payload) {
  return async (dispatch) => {
    try {
      let response = await register(payload);
      let data = response;
      dispatch({
        type: "login",
        name: data?.user?.name,
        email: data?.user?.email,
        isAuth: true,
      });
      return data;
    } catch (err) {}
  };
};
export function authForgot(payload) {
  return async (dispatch) => {
    try {
      let response = await forgotProses(payload);
      let data = response.data;
      console.log(data);
      dispatch({
        type: "login",
        email: data?.user?.email,
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}
export function authReset(id,token,payload) {
  return async (dispatch) => {
    try {
      let response = await resetProses(id,token,payload);
      let data = response.data;
      console.log(data);
      dispatch({
        type: "login",
        email: data?.user?.email,
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}
export function authMe(payload) {
  return async (dispatch) => {
    try {
      let response = await authMeProcess();
      let data = response.data;
      console.log("data =>",response);
      dispatch({
        type: "login",
        name: data?.user?.name,
        email: data?.user?.email,
        isAuth: true,
      });
      Cookies.set("myapps_token", data.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}