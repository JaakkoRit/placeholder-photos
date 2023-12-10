import { useSearchParams } from "react-router-dom";

export const usePhotosPage = (): number => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page") ?? "", 10);

  if (isNaN(page)) {
    setSearchParams({ page: "1" });

    return 1;
  }

  return page;
};
