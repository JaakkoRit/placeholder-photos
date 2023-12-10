import { ReactElement } from "react";
import "../styles/ContentLayout.css";

interface Props {
  title: string;
  children: ReactElement;
}

export const ContentLayout = ({ title, children }: Props): ReactElement => {
  return (
    <div className="content-layout">
      <h1>{title}</h1>
      <main>{children}</main>
    </div>
  );
};
