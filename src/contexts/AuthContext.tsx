import { createContext, useEffect, useReducer } from "react";

const initialState = {
  isAuthen: false,
  isInitialize: false,
};

export const AuthContext = createContext<any>(initialState);

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthen: true };
    case "LOGOUT":
      return { ...state, isAuthen: false };
    case "INITIALIZE":
      return { ...state, isInitialize: true };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = localStorage.token;
    if (token) {
      dispatch({ type: "LOGIN" });
    }
    dispatch({ type: "INITIALIZE" });
  }, []);

  const login = async (form: any) => {
    localStorage.setItem("token", "");
    dispatch({ type: "LOGIN" });
  };

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };

  if (!state.isInitialize) return <div>loading...</div>;

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
