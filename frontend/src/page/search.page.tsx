import React from "react";
import { Input } from "../components/ui/input";

type ISearchProps = React.FC<{}>;

const SearchPage: ISearchProps = () => {

  return (
    <main className="bg-background">
      <div className="h-screen flex justify-center items-center">
        <div className="w-2/3 h-fit space-y-16 mb-40">
          <h1 className="text-8xl font-light text-center">
            Connecting You to Your Perfect{" "}
            <span className="italic underline">Business</span> Match
          </h1>
          <div className="w-full justify-center items-center">
            <Input placeholder="Search for any company name" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
