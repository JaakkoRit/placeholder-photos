import { ReactElement } from "react";
import { usePhotos } from "../api/getPhotos";
import "../styles/photosList.css";
import { PhotosList } from "./PhotosList";
import { Pagination } from "@/components/pagination/Pagination";
import { usePhotosPage } from "@/hooks/usePhotosPage";

export const PhotosView = (): ReactElement => {
  const page = usePhotosPage();
  const { data, status, pagination } = usePhotos({ page });

  if (status === "init" || status === "loading") {
    return <>Loading photos</>;
  } else if (status === "error") {
    return <>Something went wrong!</>;
  }

  return (
    <>
      Page: {pagination.current}
      <PhotosList photos={data} />
      {data.length > 0 && <Pagination pagination={pagination} />}
    </>
  );
};
