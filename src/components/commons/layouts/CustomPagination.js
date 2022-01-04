import Pagination from "@mui/material/Pagination";
import "../../../customStyles/CustomPagination.css";

const CustomPagination = ({ currPage, setPage, numOfPages }) => {
  const handlePageChange = (event, page) => {
    setPage(page);
  };
  return (
    <div className="pagination-container">
      <Pagination
        page={parseInt(currPage)}
        count={numOfPages <= 500 ? numOfPages : 500}
        shape="rounded"
        onChange={handlePageChange}
      />
    </div>
  );
};

export default CustomPagination;
