import { useContext, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { linkContext } from "../../layouts/articles";
import "./index.css";

const SearchInput = () => {
  const { setNewsApiInitialState } = useContext(linkContext);

  const [qSearch, setQSearch] = useState("");

  const search = (title = "general") => {
    setNewsApiInitialState((pre) => {
      return { ...pre, q: title };
    });
    return;
  };

  return (
    <div className="inputWrapper">
      <input
        className="searchInput"
        onChange={(event) => {
          setQSearch(event.target.value);
        }}
      />
      <Search
        className="searchIcon"
        size={30}
        onClick={() => {
          search(qSearch);
        }}
      />
    </div>
  );
};

export default SearchInput;
