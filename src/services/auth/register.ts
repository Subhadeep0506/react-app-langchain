import axios from "axios";
import RegisterFormInputs from "@/interfaces/auth/register";

const registerUser = async (formData: RegisterFormInputs) => {
  const { username, password, confirmPassword, email } = formData
  if (password != confirmPassword) {
    return {
      success: false,
      message: "Password don't match.",
    };
  }
  try {
    const root_url: string | undefined = process.env.FASTAPI_URL;
    const data = {
      username: username,
      password: password,
      email: email,
    }
    const response = await axios.post(`${root_url}/register`, data);
    if (response.status == 200) {
      return {
        success: true,
        message: response.data.message,
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

export default registerUser;
