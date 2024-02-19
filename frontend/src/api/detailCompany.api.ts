import axios from "axios";

import AxiosConfig, { IApiResponse } from "../config/axios.config";
import { ICompany } from "./interface";

interface IResponse extends IApiResponse {
  data: ICompany | null;
}

export const detailCompanies = async (id: string): Promise<IResponse> => {
  try {
    const { data, status } = await AxiosConfig.get(`/api/v1/company/${id}`);
    return await Promise.resolve({
      code: status,
      message: undefined,
      data,
    });
  } catch (error) {
    if (axios.isCancel(error)) {
      return await Promise.resolve({
        code: 400,
        message: undefined,
        data: null,
      });
    }

    if (axios.isAxiosError(error)) {
      const { response } = error;
      const statusCode = response?.status ?? 0;
      return await Promise.resolve({
        code: statusCode,
        message: response?.statusText,
        data: null,
      });
    }
    return await Promise.resolve({
      code: 400,
      message: undefined,
      data: null,
    });
  }
};

interface ISimilarResponse extends IApiResponse {
  data: {
    count: number;
    next: string;
    previous: string | null;
    results: ICompany[];
  } | null;
}

export const similarCompanies = async (
  id: string
): Promise<ISimilarResponse> => {
  try {
    const { data, status } = await AxiosConfig.get(
      `/api/v1/similar-companies/${id}`
    );
    return await Promise.resolve({
      code: status,
      message: undefined,
      data,
    });
  } catch (error) {
    if (axios.isCancel(error)) {
      return await Promise.resolve({
        code: 400,
        message: undefined,
        data: null,
      });
    }

    if (axios.isAxiosError(error)) {
      const { response } = error;
      const statusCode = response?.status ?? 0;
      return await Promise.resolve({
        code: statusCode,
        message: response?.statusText,
        data: null,
      });
    }
    return await Promise.resolve({
      code: 400,
      message: undefined,
      data: null,
    });
  }
};
