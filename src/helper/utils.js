import jwtDecode from "jwt-decode";

const generateUniqueString = (type) => {
  var ts = String(new Date().getTime()),
    i = 0,
    out = "";

  for (i = 0; i < ts.length; i += 2) {
    out += Number(ts.substr(i, 2)).toString(36);
  }

  return type + out;
};

const setToken = (token) => {
  localStorage.setItem("Authentication", token);
};

const getToken = () => {
  return localStorage.getItem("Authentication");
};

const isAuthenticated = () => {
  const token = getToken();

  if (!token) {
    return false;
  }

  try {
    const decodedToken = jwtDecode(token);

    if (!decodedToken.exp || decodedToken.exp < Date.now() / 1000) {
      return false;
    }
  } catch {
    return false;
  }

  return true;
};

const logout = () => {
  localStorage.removeItem("Authentication");
};

export { generateUniqueString, setToken, getToken, isAuthenticated, logout };
