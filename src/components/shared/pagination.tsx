import Wrapper from "./wrapper";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Wrapper className="flex items-center justify-center space-x-2 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md text-white ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-secondary hover:bg-gray-500"}`}>
        Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-md w-11 ${page === currentPage ? "bg-secondary text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-700"}`}>
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md text-white ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-secondary hover:bg-gray-500"}`}>
        Next
      </button>
    </Wrapper>
  );
};

export default Pagination;
