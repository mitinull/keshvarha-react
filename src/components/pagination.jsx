import { useContext } from "react";
import { CARD_PER_PAGE } from "../config";
import CountriesContext from "../contexts/countries";

const Pagination = () => {
  const { countries, page, setPage } = useContext(CountriesContext);

  return (
    <section className="pagination">
      {page > 1 && (
        <div className="pagination__btn" onClick={() => setPage(page - 1)}>
          &larr; page {page - 1}
        </div>
      )}
      {page < countries.length / CARD_PER_PAGE && (
        <div className="pagination__btn" onClick={() => setPage(page + 1)}>page {page + 1} &rarr;</div>
      )}
    </section>
  );
};

export default Pagination;
