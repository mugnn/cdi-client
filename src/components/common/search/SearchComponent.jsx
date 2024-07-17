import { useEffect, useState } from "react";
import { useTheme } from "../../../contexts/Theme/ThemeContext";
import "./index.css";

const SearchComponent = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    props.filterByKeyword(searchTerm);
  }, [searchTerm]);

  return (
    <div className="common_search_component">
      <svg
        id="common_icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          stroke={ theme === 'light' ? '#1b1a20' : '#ffffff' }
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        id="inputbox_search_component"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchComponent;
