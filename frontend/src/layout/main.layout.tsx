import React, { PropsWithChildren } from "react";

type ILayout = React.FC<
  PropsWithChildren<{
    onEndReached?: (arr?: any) => void;
  }>
>;

const Layout: ILayout = ({ onEndReached, children }) => {
  void onEndReached?.();

  return (
    <main className="bg-background">
      <div className="h-16 w-full border-b-2 fixed z-40">
        <div className="backdrop-blur-sm p-5">
          <a href='/'>
          <p>Test</p>
          </a>
        </div>
      </div>
      <div className="h-screen container pt-16">{children}</div>
    </main>
  );
};

export default Layout;
