import axios, { Method } from "axios";

interface AxiosProps {
    method: Method;
    url: string;
    headers: any;
    data: any;
}

const BASE_URL = "http://52.79.148.224:8080";
export const ACCESS_TOKEN = 'alchemist_access_token';
export const REFRESH_TOKEN = 'alchemist_refresh_token';

export const requestWithOutAccessToken = ({ method, url, headers, data }: AxiosProps) => {
    return axios({
        method,
        url: BASE_URL + url,
        headers,
        data,
    })
        .then((res) => {
            return res;
        }).catch((err) => {
            throw new Error(err);
        });
};

export const requestWithAccessToken = ({ method, url, headers, data }: AxiosProps) => {
    return axios({
        method,
        url: BASE_URL + url,
        headers: { ...headers, authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}` },
        data,
    })
        .then((res) => {
            return res;
        }).catch(async (err) => {
            if (err.response.status === 401) {
                try {
                    const res = await axios({
                        method: "PUT",
                        url: "/refresh",
                        headers: {},
                        data: {
                            "refreshToken": localStorage.getItem("alchemist_refresh_token")
                        },
                    });
                    const { access_token, refresh_token } = res.data;

                    localStorage.setItem("alchemist_access_token", access_token);
                    localStorage.setItem("alchemist_refresh_token", refresh_token)
                }
                catch (err: any) {
                    if (err.response.status === 401) {
                        window.location.href = "/signin";
                    }
                }
            }
            return Promise.reject(err);
        });
};

//사용 예시
// requestWithAccessToken({
//     method: "DELETE",
//     url: "/sdf",
//     headers: { "Content-Type": "application/json" },
//     data: { a: "" } }).then((res)=>{
//         const res : 타입 = res;
//     }).catch((err)=>{
//         return;
//     })