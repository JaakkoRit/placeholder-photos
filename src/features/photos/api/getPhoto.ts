import axios from "axios";
import { useEffect, useState } from "react";
import { Photo } from "../types/photo";

type ResponseStatus = "init" | "success" | "error" | "loading";

interface PhotoResponse {
  status: ResponseStatus;
  data: Photo | null;
}

export const usePhoto = (id: number): PhotoResponse => {
  const [status, setStatus] = useState<ResponseStatus>("init");
  const [photo, setPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    const photoPromise = axios<Photo>(
      `https://jsonplaceholder.typicode.com/photos/${id}`,
    );

    setStatus("loading");

    photoPromise
      .then((response) => {
        setPhoto(response.data);
        setStatus("success");
      })
      .catch(() => {
        setStatus("error");
      });
  }, [id, setStatus]);

  return {
    data: photo,
    status,
  };
};
