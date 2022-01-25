import axios, { Method } from "axios";
import swal from "sweetalert";

interface AxiosProps {
    method: Method;
    url: string;
    headers: any;
    data: any;
}

const BASE_URL = "https://dsm-alchemist.kro.kr";
const AI_URL = "https://alchemist-timer.kro.kr"
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

export const requestAi = ({ method, url, headers, data }: AxiosProps) => {
    return axios({
        method,
        url: AI_URL + url,
        headers,
        data,
    }).then((res) => {
        return res;
    }).catch((err) => {
        throw new Error(err);
    })
}

export const requestWithAccessToken = ({ method, url, headers, data }: AxiosProps) => {
    return axios({
        method,
        url: BASE_URL + url,
        headers: { ...headers, authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}` },
        data,
    })
        .then((res) => {
            return res;
        }).catch((err) => {
            if (err.response.status === 401) {
                requestWithOutAccessToken({
                    method: "PUT",
                    url: "/refresh",
                    headers: {},
                    data: {
                        "refreshToken": localStorage.getItem("alchemist_refresh_token")
                    }
                }).then((res) => {
                    console.log(res);
                    window.location.reload();
                    localStorage.setItem("alchemist_access_token", res.data.accessToken);
                    localStorage.setItem("alchemist_refresh_token", res.data.refreshToken);
                }).catch(() => {
                    swal({
                        title: "로그인 기간이 만료되었습니다.",
                        icon: "error"
                    }).then(() => {
                        localStorage.clear();
                        window.location.href = "/signin";
                    });
                })
            }
            return err;
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

// if (err.response.status === 401) {
//     try {
//         const res = await axios({
//             method: "PUT",
//             url: "http://52.79.148.224:8080/refresh",
//             headers: {},
//             data: {
//                 "refreshToken": localStorage.getItem("alchemist_refresh_token")
//             },
//         });
//         const { accessToken, refreshToken } = res.data;
//         localStorage.setItem("alchemist_access_token", accessToken);
//         localStorage.setItem("alchemist_refresh_token", refreshToken);
//     }
//     catch (error: any) {
//         console.log("안돼!");
//     }
// }
// return Promise.reject(err);