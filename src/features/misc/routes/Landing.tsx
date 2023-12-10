import { ReactElement } from "react";
import { ContentLayout } from "@/components/layout/ContentLayout";

export const Landing = (): ReactElement => {
  return (
    <ContentLayout title="Welcome to placeholder photos">
      <a href="/photos">Photos</a>
    </ContentLayout>
  );
};
