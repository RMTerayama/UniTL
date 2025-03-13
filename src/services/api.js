import axios from "axios";

// Criando uma instância do Axios
const api = axios.create({
    baseURL: "http://localhost:3000", // URL do backend
});

// Interceptor para adicionar o token JWT automaticamente
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
