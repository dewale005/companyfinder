import axios, { AxiosError } from 'axios'

const AxiosConfig = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

AxiosConfig.interceptors.request.use(
  (request) => {
    return request
  },
  async (error) => {
    return await Promise.reject(error)
  }
)

AxiosConfig.interceptors.response.use(
  (response) => {
    return response
  },
  async (error: AxiosError) => {
    return await Promise.reject(error)
  }
)

export interface IApiResponse {
    message: string | undefined;
    code: number;
  }

export default AxiosConfig