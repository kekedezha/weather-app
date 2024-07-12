import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div id="searchBar">
      <input type="text" id="searchBarInput" placeholder="Search by City" />
      <button id="searchIcon">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
