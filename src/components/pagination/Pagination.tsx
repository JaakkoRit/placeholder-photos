import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Pagination.css";
import { Pagination as PaginationObject } from "@/features/photos/api/getPhotos";

interface Props {
  pagination: PaginationObject;
}

export const Pagination = ({ pagination }: Props): ReactElement => {
  const navigate = useNavigate();

  const navigateTo = (page: string | null) => {
    if (page !== null) {
      navigate(`/photos?page=${page}`);
    }
  };

  return (
    <div className="pagination-container">
      {pagination.current !== pagination.first && (
        <button onClick={() => navigateTo(pagination.first)}>First</button>
      )}
      {pagination.prev && (
        <button onClick={() => navigateTo(pagination.prev)}>Prev</button>
      )}
      {pagination.next && (
        <button onClick={() => navigateTo(pagination.next)}>Next</button>
      )}
      {pagination.current !== pagination.last && (
        <button onClick={() => navigateTo(pagination.last)}>Last</button>
      )}
    </div>
  );
};
