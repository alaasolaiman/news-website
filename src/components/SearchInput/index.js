import { useContext, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { linkContext } from "../../layouts/Articles";
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
    <div className="searchInput__wrapper">
      <input
        className="searchInput"
        value={qSearch}
        onChange={(event) => {
          setQSearch(event.target.value);
        }}
      />
      <Search
        className="searchInput__searchIcon"
        size={30}
        onClick={() => {
          search(qSearch);
          setQSearch("");
        }}
      />
    </div>
  );
};

export default SearchInput;
