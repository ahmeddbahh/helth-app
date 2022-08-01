import axios from 'axios';
// import {isAuthenticated} from "./components/shared/isAuthenticated.js"
let buseUrl = 'http://127.0.0.1:2271/api'
// let buseUrl = 'http://127.0.0.1:8000/api'
// let loginPath='http://localhost:8080/login'
axios.defaults.baseURL = buseUrl;

//import vm from './router/index.js'





// Add a request interceptor
// axios.interceptors.request.use(
//     config => {
//         // Do something before request is sent
//         if (vm.name != "login") {
//             if (localStorage.getItem("accessToken") && localStorage.getItem("refreshToken")) {
//                 config.headers['Authorization'] = "Bearer" + " " + localStorage.getItem("accessToken");
//             } else {
//                 localStorage.clear();
//                 window.location.href = "/"
//             }
//         }
//         return config;
//     },
//     error => {
//         Promise.reject(error)
//     }
// );

// Add a response interceptor
axios.interceptors.response.use(response => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    async error => {
        // Do something with request error
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const res = await axios
                    .post("/token/refresh/", {
                        refresh: localStorage.getItem("refreshToken"),
                    });
                let newAccessToken = res.data.access;
                localStorage.setItem("accessToken", newAccessToken)
                error.config.headers["Authorization"] = "Bearer" + " " + newAccessToken;
                return await axios(originalRequest);
            } catch (err) {
                if (err) {
                    let lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "en";
                    localStorage.clear();
                    localStorage.setItem("lang", lang);

                    window.location.href = "/"
                }
            }
        }
    });