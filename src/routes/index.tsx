import { ReactElement } from "react";
import { useRoutes } from "react-router-dom";
import { Landing } from "@/features/misc";
import { PhotosRoute, PhotoRoute } from "@/features/photos";

export const AppRoutes = (): ReactElement => {
  const element = useRoutes([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/photos/:id",
      element: <PhotoRoute />,
    },
    {
      path: "/photos",
      element: <PhotosRoute />,
    },
  ]);

  return <>{element}</>;
};
