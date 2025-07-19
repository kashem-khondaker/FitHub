import React from "react";

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <div className="flex justify-center items-center gap-2 py-10">
      {Array.from({ length: totalPages }, (_, i) => {
        const pageNum = i + 1;
        const isActive = currentPage === pageNum;

        return (
          <button
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            className={`px-4 py-2 rounded-md border text-sm font-medium transition-all duration-200
          ${
            isActive
              ? "bg-blue-600 text-white border-blue-600 shadow-md"
              : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600"
          }
        `}
          >
            {pageNum}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
