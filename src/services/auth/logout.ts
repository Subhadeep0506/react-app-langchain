import axios from "axios";

const logoutUser = async () => {
    try {
        const root_url: string | undefined = process.env.FASTAPI_URL;
        const token = localStorage.getItem("access_token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await axios.post(`${root_url}/me/logout`, {}, config);

        return {
            success: true,
            message: response.data.message,
        };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return {
                success: false,
                message: `Logout failed: ${error.response?.data.detail || error.message}`,
            };
        } else {
            return {
                success: false,
                message: `Logout failed: ${error}`,
            };
        }
    }
};

export default logoutUser;