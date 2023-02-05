import { PublicRequest } from "../AxiosRequestMethod";
import { loginFailed, loginStart, loginSuccess, signupFailed, signupStart, signupSuccess } from "./userRedux";

export const Login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await PublicRequest.post("/auth/signin", user);

    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailed(err));
  }
};


export const Signup = async (dispatch, user) => {
    dispatch(signupStart());
  
    try {
      const res = await PublicRequest.post("/auth/signup", user);
  
      dispatch(signupSuccess(res.data));
    } catch (err) {
      dispatch(signupFailed(err));
    }
  };
  