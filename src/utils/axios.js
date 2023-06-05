import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "https://net-sandbox.pipedrive.com/api/v1/",
    timeout: 0,
    headers: {
        Accept: "application/json",
    },
    params: {
        api_token: "5a16704d683205d69c1ab894c205af1e885e3656",
    },
});

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axiosInstance.defaults.headers.post["Access-Control-Allow-Methods"] = "GET,PUT,POST,DELETE,PATCH,OPTIONS";
axiosInstance.defaults.headers.post["Access-Control-Allow-Credentials"] = true;

export default axiosInstance;
