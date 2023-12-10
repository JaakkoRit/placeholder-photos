import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Photo } from "../types/photo";

type ResponseStatus = "init" | "success" | "error" | "loading";

interface PhotosResponse {
  status: ResponseStatus;
  data: Photo[];
  pagination: Pagination;
}

export interface Pagination {
  first: string | null;
  prev: string | null;
  current: string | null;
  next: string | null;
  last: string | null;
}

interface Props {
  page: number;
}

export const usePhotos = ({ page }: Props): PhotosResponse => {
  const [status, setStatus] = useState<ResponseStatus>("init");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    first: null,
    prev: null,
    current: page.toString(),
    next: null,
    last: null,
  });

  const parsePage = (link: string): string => {
    const indexOfPage = link.indexOf("_page=");
    const indexOfLimit = link.indexOf("&_limit=");
    return link.slice(indexOfPage + 6, indexOfLimit);
  };

  const parsePagination = useCallback(
    (links: string[]) => {
      const parsedPagination: Pagination = {
        first: null,
        prev: null,
        current: page.toString(),
        next: null,
        last: null,
      };

      links.forEach((link) => {
        const parts = link.split(";");
        if (parts[1].includes('rel="first"')) {
          parsedPagination.first = parsePage(parts[0]);
        } else if (parts[1].includes('rel="prev"')) {
          parsedPagination.prev = parsePage(parts[0]);
        } else if (parts[1].includes('rel="next"')) {
          parsedPagination.next = parsePage(parts[0]);
        } else if (parts[1].includes('rel="last"')) {
          parsedPagination.last = parsePage(parts[0]);
        }
      });

      setPagination(parsedPagination);
    },
    [page],
  );

  useEffect(() => {
    const photosPromise = axios<Photo[]>(
      "https://jsonplaceholder.typicode.com/photos",
      {
        params: { _page: page, _limit: 15 },
      },
    );

    setStatus("loading");

    photosPromise
      .then((response) => {
        const links = response.headers.link.split(",");

        parsePagination(links);

        setPhotos(response.data);
        setStatus("success");
      })
      .catch(() => {
        setStatus("error");
      });
  }, [page, setStatus, parsePagination]);

  return {
    data: photos,
    status,
    pagination,
  };
};
