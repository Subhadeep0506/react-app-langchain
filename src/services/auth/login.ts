import axios from "axios";
import LoginFormInputs from "@/interfaces/auth/login";
import getUser from "./getUser";

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const loginUser = async (formData: LoginFormInputs) => {
  const { username, password } = formData
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
    if (response.status == 200 && await getUser()) {
      return {
        success: true,
        message: "Login successful",
      };
    } else {
      return {
        success: false,
        message: response.data.message,
      };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        message: `Login failed: ${error.response?.data.detail || error.message
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

export default loginUser;
