import { ReactElement } from "react";
import { PhotosView } from "../components/PhotosView";
import { ContentLayout } from "@/components/layout/ContentLayout";

export const PhotosRoute = (): ReactElement => {
  return (
    <ContentLayout title="Photos">
      <PhotosView />
    </ContentLayout>
  );
};
