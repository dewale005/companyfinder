import { createBrowserRouter } from "react-router-dom";
import SearchPage from "../page/search.page";
import CompanyDetailPage from "../page/companyDetails.page";
import SimilarCompaniesPage from "../page/similarCompany.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "company/:id",
    element: <CompanyDetailPage />
  },
  {
    path:"company/similar/:id",
    element: <SimilarCompaniesPage />
  }
]);
