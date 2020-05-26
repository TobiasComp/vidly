import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Paginator = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  console.log("itemsCount", itemsCount);
  console.log("pageSize", pageSize);

  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  console.log("this is the list of pages", pages);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={page == currentPage ? "page-item active" : "page-item"}
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Paginator.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
export default Paginator;
