import axios from "axios";

const getUser = async () => {
    try {
        const root_url: string | undefined = process.env.FASTAPI_URL;
        const token = localStorage.getItem("access_token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await axios.get(`${root_url}/me/info`, config);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("firstName", response.data.first_name);
        localStorage.setItem("lastName", response.data.last_name);
        localStorage.setItem("role", response.data.role);
        return response.status == 200? true : false;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return false
        } else {
            return false
        }
    }
};

export default getUser;
