import { useCallback, useState } from "react";
import { ICompany } from "../api/interface";
import { searchCompanies } from "../api/randomizedCompanies.api";

interface IRandomCompanies {
  searchResult: ICompany[];
  search: (query: string) => void;
}

export const useRandomCompanies = (): IRandomCompanies => {
  const [searchResult, setSearchResult] = useState<ICompany[]>([]);

  const search = useCallback(async (query: string) => {
    if (query.length > 0) {
      const resp = await searchCompanies(query);
      if (resp.code === 200) {
        setSearchResult(resp.data?.results as ICompany[]);
      }
    } else {
      setSearchResult([]);
    }
  }, []);

  return {
    search,
    searchResult,
  };
};
