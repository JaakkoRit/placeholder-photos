import { ReactElement } from "react";
import { useAlbum } from "../api/getAlbum";
import { usePhoto } from "../api/getPhoto";
import { PhotoElement } from "./PhotoElement";
import { PhotosList } from "./PhotosList";
import { LoadingSpinner } from "@/components/spinner/LoadingSpinner";

interface Props {
  id: number;
}

export const PhotoView = ({ id }: Props): ReactElement => {
  const { data: photo, status: photoStatus } = usePhoto(id);
  const { data: albumData } = useAlbum(photo?.albumId);

  if (photoStatus === "loading") {
    return <LoadingSpinner />;
  } else if (photoStatus === "error" || photo === null) {
    return <>Error loading photo</>;
  }

  return (
    <>
      <h2>{photo.title}</h2>
      <PhotoElement id={photo.id} src={photo.url} />
      <h3>Album</h3>
      <PhotosList photos={albumData} />
    </>
  );
};
