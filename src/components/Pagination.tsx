type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-between mt-6 border-t pt-4 border-gray-200 dark:border-gray-700">

      {/* LEFT - Pagination */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded-lg disabled:opacity-40"
        >
          &lt;
        </button>

        {pages.slice(0, 5).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-lg border ${
              currentPage === page
                ? "bg-purple-600 text-white"
                : "bg-white dark:bg-gray-800"
            }`}
          >
            {page}
          </button>
        ))}

        <span className="px-2">...</span>

        <button
          onClick={() => onPageChange(totalPages)}
          className="px-3 py-1 border rounded-lg"
        >
          {totalPages}
        </button>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded-lg disabled:opacity-40"
        >
          &gt;
        </button>
      </div>

      {/* RIGHT - Info */}
      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <span>Total 85 Products</span>

        <select className="border rounded-lg px-2 py-1 bg-white dark:bg-gray-800 dark:border-gray-700">
          <option>8 / page</option>
          <option>16 / page</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;