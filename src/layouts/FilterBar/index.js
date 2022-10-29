import SelectMenu from "../../components/SelectMenu";
import SearchInput from "../../components/SearchInput";
import Radio from "../../components/Radio";

import {
  menuNames,
  newsApiLanguages,
  newsApiLanguagesList,
  newsApiSortBy,
  newsApiSortByList,
  searchIn,
} from "../../config/newsApiFilter";

import "./index.css";
import { Row } from "react-bootstrap";
import DatePicker from "../../components/DatePicker";

const FilterBar = () => {
  return (
    <Row>
      <ul className="filterBar">
        <li className="filterBar__Link">
          <SearchInput />
        </li>

        <li className="filterBar__Link">
          <SelectMenu
            list={newsApiLanguagesList}
            menuName={menuNames.language}
            newsObject={newsApiLanguages}
          />
        </li>

        <li className="filterBar__Link">
          <SelectMenu
            list={newsApiSortByList}
            menuName={menuNames.sortBy}
            newsObject={newsApiSortBy}
          />
        </li>
        <div className="linksWrapper">
          <li className="filterBar__Link">
            <label className="filterTitle">search in</label>
            <Radio menu={searchIn} menuName={menuNames.searchIn} />
          </li>

          <li className="filterBar__Link filterBar__Link__dates">
            <div className="from">
              <label>From</label>
              <DatePicker menuName={menuNames.from} />
            </div>
            <div className="to">
              <label>To</label>
              <DatePicker menuName={menuNames.to} />
            </div>
          </li>
        </div>
      </ul>
    </Row>
  );
};

export default FilterBar;
