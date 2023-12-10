import { ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";

interface Props {
  children: ReactElement;
}

export const AppProvider = ({ children }: Props): ReactElement => {
  return <Router>{children}</Router>;
};
