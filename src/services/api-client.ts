import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "24724e939bf14b7cb9dcd2f6102a739c",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}


class APIClient<T>{
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<T>(
      this.endPoint,
      config
    )
    .then((res) => {
      return res.data;
    });
  }

  get = (id: number | string) => {
    return axiosInstance.get<T>(
      this.endPoint + '/' + id,

    ).then((res) => res.data);
  }

  getMedia = (id: number | string, mediaType : string) =>{
    return axiosInstance.get<T>(
      this.endPoint + '/' + id + '/' + mediaType
    ).then((res) => res.data);
  }
  
}

export default APIClient;