import React from "react";
import { useCompanyList } from "../hook/useCompany.hook";
import { useParams } from "react-router-dom";
import Layout from "../layout/main.layout";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui";
import { Link } from "lucide-react";

type ISimilarCompaniesProps = React.FC<{}>;

const SimilarCompaniesPage: ISimilarCompaniesProps = () => {
  const { id }: { id?: string } = useParams();
  const { similarCompany, company } = useCompanyList(id as string);

  return (
    <Layout>
      <div className="mt-3">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-5">
          Similar Companies to {company?.company_name}
        </h1>
        <div className="grid grid-cols-4 gap-4">
          {similarCompany.map((ele) => (
            <Card key={ele.id}>
              <CardHeader>
                <CardTitle className="line-clamp-1">
                  {ele.company_name}
                </CardTitle>
                <CardDescription>{ele.industry}</CardDescription>
              </CardHeader>
              <CardContent className="w-full">
                <div className="w-full">
                  <h2 className="font-medium">About</h2>
                  <p className="text-xs font-light text-muted-foreground line-clamp-6">
                    {ele.about}
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <a href={`/company/${ele.id}`} className="w-full">
                  <Button className="w-full">
                    <Link className="mr-2 h-4 w-4" /> View Company
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SimilarCompaniesPage;
