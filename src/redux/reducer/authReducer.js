const initialState = {
  name: "",
  email: "",
  password: "",
  status: "",
  jenisKelamin: "",
  isAuth: false,
};

export const authProcess = (state = initialState, action) => {
  if (action.type === "login") {
    return {
      ...state,
      name: action.name,
      email: action.email,
      password: action.password,
      status: action.status,
      jenisKelamin: action.jenisKelamin,
      isAuth: true,
    };
  }
  return {
    ...state,
  };
};
