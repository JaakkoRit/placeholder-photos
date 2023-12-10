import { ReactElement, useState } from "react";
import "../styles/Photo.css";
import ErrorIcon from "@/assets/error-icon.svg";
import { LoadingSpinner } from "@/components/spinner/LoadingSpinner";

interface Props {
  src: string;
  id: number;
  onClick?: (id: number) => void;
}

export const PhotoElement = ({ src, id, onClick }: Props): ReactElement => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="photo-error-container"
        onClick={onClick && (() => onClick(id))}
      >
        <img src={ErrorIcon} />
        <span>Error loading photo</span>
      </div>
    );
  }

  return (
    <>
      <img
        key={src}
        src={src}
        alt="photo"
        onError={() => {
          setHasError(true);
        }}
        onLoad={() => {
          setHasLoaded(true);
        }}
        style={{
          display: hasLoaded ? "block" : "none",
        }}
        onClick={onClick && (() => onClick(id))}
      />

      {!hasLoaded && <LoadingSpinner />}
    </>
  );
};
