import { useCallback, useEffect, useState } from "react";
import { ICompany } from "../api/interface";
import { detailCompanies, similarCompanies } from "../api/detailCompany.api";

interface ICompanyList {
  company: ICompany | null;
  similarCompany: ICompany[];
}

export const useCompanyList = (id: string): ICompanyList => {
  const [company, setCompany] = useState<ICompany | null>(null);
  const [similarCompany, setSimilarCompany] = useState<ICompany[]>([]);

  const fetchCompany = useCallback(async () => {
    const resp = await detailCompanies(id);
    if (resp.code === 200) {
      setCompany(resp.data as ICompany);
    }
  }, [id]);

  const fetchSimilarCompany = useCallback(async () => {
    const resp = await similarCompanies(id);
    if (resp.code === 200) {
      setSimilarCompany(resp.data?.results as ICompany[]);
    }
  }, [id]);

  useEffect(() => {
    fetchCompany();
    fetchSimilarCompany();
  }, [fetchCompany, fetchSimilarCompany]);

  return {
    company,
    similarCompany,
  };
};
