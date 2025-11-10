"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Pagination = ({ totalPages = 1 }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const pNum = parseInt(searchParams.get("page")) || 1;
    setPageNumber(Math.max(1, Math.min(pNum, totalPages))); // Ensure within valid range
  }, [searchParams, totalPages]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    router.push(`${pathname}?${params.toString()}`, { scroll: true });
  };

  return (
    <section className="pagination-container">
      <div className="pagination-grid">
        {/* Left Arrow */}
        <button
          onClick={() => goToPage(pageNumber - 1)}
          disabled={pageNumber === 1}
          className="pagination-btn disabled:opacity-50"
        >
          ◀
        </button>

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`pagination-btn ${
                pageNumber === page ? "active" : ""
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Right Arrow */}
        <button
          onClick={() => goToPage(pageNumber + 1)}
          disabled={pageNumber === totalPages}
          className="pagination-btn disabled:opacity-50"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default Pagination;
