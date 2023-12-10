import { ReactElement } from "react";
import "../styles/LoadingSpinner.css";
import Spinner from "@/assets/spinner.svg";

export const LoadingSpinner = (): ReactElement => {
  return (
    <div className="loading-spinner-container">
      <img src={Spinner} />
    </div>
  );
};
