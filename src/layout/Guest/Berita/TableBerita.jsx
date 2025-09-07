import { useState } from "react";
import ReactPaginate from "react-paginate";
import Filter from "../../../components/Filter";
import Data from "../../../data/Berita";
import Date from "../../../components/Date";

const TableBerita = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  // hitung item yang ditampilkan
  const offset = currentPage * itemsPerPage;
  const currentItems = Data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <section className="px-4 md:px-40 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-medium">Indexs Berita</h1>
        <Filter />
      </div>

      <hr className="border-gray-200 my-6" />

      {/* List berita */}
      <div className="flex flex-col gap-6">
        {currentItems.map((berita) => (
          <div
            key={berita.id}
            className="card flex flex-col md:flex-row gap-4 shadow-lg px-4 md:px-8 py-4 rounded-lg w-full"
          >
            <img
              src={berita.image}
              alt={berita.title}
              className="w-full md:max-w-60 h-40 md:h-auto object-cover rounded-md"
            />
            <div className="flex flex-col justify-between md:justify-start">
              <Date title="Berita" date={berita.date} />
              <h1 className="text-base md:text-lg font-medium text-justify line-clamp-2">
                {berita.title}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-gray-200 mt-8" />

      {/* Pagination */}
      <div className="mt-6">
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"flex flex-wrap gap-2 justify-center text-sm"}
          pageClassName={
            "px-3 py-1 border rounded hover:bg-blue-100 transition-colors"
          }
          activeClassName={"bg-blue-500 text-white"}
          previousClassName={
            "px-3 py-1 border rounded hover:bg-blue-100 transition-colors"
          }
          nextClassName={
            "px-3 py-1 border rounded hover:bg-blue-100 transition-colors"
          }
          disabledClassName={"opacity-50 cursor-not-allowed"}
        />
      </div>
    </section>
  );
};

export default TableBerita;
