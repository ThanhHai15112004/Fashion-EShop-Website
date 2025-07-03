import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  return (
    <div className="subnav__search">
        <select className="search__select">
          <option>All</option>
          <option>Nữ</option>
          <option>Nam</option>
        </select>
        <input className="search__input" placeholder="Tìm Kiếm Sản Phẩm......" />
        <button className="search__btn">
          <FaSearch />
        </button>
      </div>
  );
}

export default SearchBar;