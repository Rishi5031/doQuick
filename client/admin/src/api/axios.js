import axios from "axios";
import { getTokens, setAccessToken } from "../context/AuthContext";

const api = axios.create({
    baseURL: "http://localhost:5000/api",
});

// Auto refresh access token
api.interceptors.response.use(
    res => res,
    async (error) => {
        const originalRequest = error.config;

        // If access token expired
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const { refreshToken } = getTokens();

            try {
                const res = await axios.post("http://localhost:5000/api/admin/auth/refresh-token", {
                    refreshToken,
                });

                setAccessToken(res.data.token);

                api.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
                originalRequest.headers["Authorization"] = `Bearer ${res.data.token}`;

                return api(originalRequest);
            } catch (err) {
                console.log("Refresh token invalid", err);
            }
        }

        return Promise.reject(error);
    }
);

export default api;
