import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({});

export const apiConnector = async(
    method: string,
    url: string,
    bodyData?: any,
    headers?: any,
    params?: any
) => {
    const config: AxiosRequestConfig = {
        method: method,
        url: `/api/proxy${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? { ...headers } : null,
        params: params ? params : null,
    };

    return axiosInstance(config).catch(error => {
        console.error('Network error', error);
        throw error;
    });
};