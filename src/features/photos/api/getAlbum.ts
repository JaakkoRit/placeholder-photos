import axios from "axios";
import { useEffect, useState } from "react";
import { Photo } from "../types/photo";

type ResponseStatus = "init" | "success" | "error" | "loading";

interface AlbumResponse {
  status: ResponseStatus;
  data: Photo[];
}

export const useAlbum = (id?: number): AlbumResponse => {
  const [status, setStatus] = useState<ResponseStatus>("init");
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    if (id === undefined) {
      return;
    }

    const photoPromise = axios<Photo[]>(
      `https://jsonplaceholder.typicode.com/photos`,
      {
        params: {
          albumId: id,
        },
      },
    );

    setStatus("loading");

    photoPromise
      .then((response) => {
        setPhotos(response.data);
        setStatus("success");
      })
      .catch(() => {
        setStatus("error");
      });
  }, [id, setStatus]);

  return {
    data: photos,
    status,
  };
};
