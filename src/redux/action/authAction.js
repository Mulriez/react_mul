import { data } from "autoprefixer";
import Cookies from "js-cookie";
import { authMeProcess, login, register } from "../../API/auth";

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

export function authRegister() {
  return async (dispatch) => {
    try {
      let response = await register();
      let data = response.data;
      dispatch({
        type: "login",
        name: data?.user?.name,
        email: data?.user?.email,
        isAuth: true,
      });
    } catch (err) {}
  };
}
;
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
