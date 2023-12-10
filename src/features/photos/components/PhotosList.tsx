import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PhotosList.css";
import { Photo } from "../types/photo";
import { PhotoElement } from "./PhotoElement";

interface Props {
  photos: Photo[];
}

export const PhotosList = ({ photos }: Props): ReactElement => {
  const navigate = useNavigate();
  return (
    <div className="photos-container">
      {photos.map((photo) => (
        <PhotoElement
          key={photo.id}
          id={photo.id}
          src={photo.thumbnailUrl}
          onClick={() => {
            navigate(`/photos/${photo.id}`);
          }}
        />
      ))}
    </div>
  );
};
