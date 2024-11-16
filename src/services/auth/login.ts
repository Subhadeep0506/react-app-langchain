import axios from "axios";

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const login = async (username: string, password: string) => {
  try {
    const root_url: string | undefined = process.env.FASTAPI_URL;
    var data = {};
    if (isValidEmail(username)) {
      data = {
        email: username,
        password: password,
      };
    } else {
      data = {
        username,
        password,
      };
    }

    const response = await axios.post(`${root_url}/login`, data);
    localStorage.setItem("access_token", response.data.access_token);
    localStorage.setItem("refresh_token", response.data.refresh_token);
    return {
      success: true,
      message: "Login successful",
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        message: `Login failed: ${
          error.response?.data.detail || error.message
        }`,
      };
    } else {
      return {
        success: false,
        message: `Login failed: ${error}`,
      };
    }
  }
};

export default login;
