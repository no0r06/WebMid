export const authService = {
  login: (email: string, password: string) => {
    // fake login logic
    if (email && password) {
      localStorage.setItem("auth", "true");
      return true;
    }
    return false;
  },

  logout: () => {
    localStorage.removeItem("auth");
  },

  isAuthenticated: () => {
    return localStorage.getItem("auth") === "true";
  },
};