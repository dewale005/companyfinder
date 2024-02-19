import React from "react";
import { useParams } from "react-router-dom";
import { useCompanyList } from "../hook/useCompany.hook";
import Layout from "../layout/main.layout";
import {
  ArrowLeft,
  Building2,
  Calendar,
  Globe2,
  LinkIcon,
  LinkedinIcon,
} from "lucide-react";

type ICompanyDetailProps = React.FC<{}>;

const CompanyDetailPage: ICompanyDetailProps = () => {
  const { id }: { id?: string } = useParams();

  const { company } = useCompanyList(id as string);

  return (
    <Layout>
      <div className="w-4/5 mt-3 min-h-screen px-9 border-x-2">
        <a
          href="/"
          type="button"
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50"
        >
          <ArrowLeft className="mr-2" />
          Back To Home
        </a>
        <div className="lg:flex lg:items-center lg:justify-between mt-3">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              {company?.company_name}
            </h2>
            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
              <a
                href={`https://${company?.linkedin_url}`}
                target="_blank"
                className="mt-2 flex items-end space-x-2 text-sm text-gray-500"
                rel="noreferrer"
              >
                <LinkedinIcon />
                <p>LinkedIn</p>
              </a>
              <div className="mt-2 flex items-end space-x-2 text-sm text-gray-500">
                <Building2 />
                <p>{company?.current_employee_estimate} Employees</p>
              </div>
              <a
                href={company?.website}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-end space-x-2 text-sm text-gray-500"
              >
                <Globe2 />
                <p>Website</p>
              </a>
              {company?.year_founded !== "" && (
                <div className="mt-2 flex items-end space-x-2 text-sm text-gray-500">
                  <Calendar />
                  <p>{parseInt(company?.year_founded as string)}</p>
                </div>
              )}
            </div>
          </div>
          <div className="mt-5 flex lg:ml-4 lg:mt-0">
            <span className="sm:ml-3">
              <a
                href={`/company/similar/${company?.id}`}
                type="button"
                className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/80"
              >
                <LinkIcon size={16} className="mr-3" />
                View Similar Companies
              </a>
            </span>
          </div>
        </div>

        <div className="justify-center items-center mt-8">
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Company Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Personal details and application.
            </p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Industry
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {company?.industry}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Country
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">
                  {company?.country}
                </dd>
              </div>
              {company?.tagline !== "" && (
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Tagline
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {company?.tagline}
                  </dd>
                </div>
              )}
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  About
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {company?.about}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Localities
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {company?.locality.map((ele, index) => (
                    <p key={index} className="capitalize">
                      {ele}
                    </p>
                  ))}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Keywords
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-900 space-x-3 sm:col-span-2 sm:mt-0">
                  {company?.keywords.map((ele, index) => (
                    <div
                      key={index}
                      className="inline-flex bg-gray-300 px-4 py-1 rounded-lg"
                    >
                      <p className="capitalize">{ele}</p>
                    </div>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CompanyDetailPage;
