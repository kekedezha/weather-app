import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div>
      <input type="text" id="searchBarInput" placeholder="Search by City" />
      <button id="searchIcon">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
