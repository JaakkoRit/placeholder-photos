import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { PhotoView } from "../components/PhotoView";
import { ContentLayout } from "@/components/layout/ContentLayout";

export const PhotoRoute = (): ReactElement => {
  const { id } = useParams();

  if (id === undefined) {
    return <>Photo ID not found</>;
  }

  return (
    <ContentLayout title={`Photo: ${id}`}>
      <PhotoView id={parseInt(id, 10)} />
    </ContentLayout>
  );
};
