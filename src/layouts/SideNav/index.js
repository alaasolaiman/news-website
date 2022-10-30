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

import DatePicker from "../../components/DatePicker";
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";
import { useState } from "react";
import { Row } from "react-bootstrap";

const SideNav = () => {
  const [openSideNav, setOpenSidNav] = useState(false);
  return (
    <Row className="sidNavWrapper">
      <CaretRightFill
        className="caretRightFill"
        onClick={() => {
          setOpenSidNav(true);
        }}
      />
      <ul className={`sideNav ${!openSideNav ? "disableSidNav" : ""}`}>
        <li className="sideNav__Link">
          <SearchInput />
        </li>

        <li className="sideNav__Link">
          <SelectMenu
            list={newsApiLanguagesList}
            menuName={menuNames.language}
            newsObject={newsApiLanguages}
          />
        </li>

        <li className="sideNav__Link">
          <SelectMenu
            list={newsApiSortByList}
            menuName={menuNames.sortBy}
            newsObject={newsApiSortBy}
          />
        </li>

        <li className="sideNav__Link">
          <label className="sideNav__radioTitle">search in</label>
          <Radio menu={searchIn} menuName={menuNames.searchIn} />
        </li>

        <li className="sideNav__Link sideNav__Link__dates">
          <div className="sideNav__from">
            <label>From</label>
            <DatePicker menuName={menuNames.from} />
          </div>
          <div className="sideNav__to">
            <label>To</label>
            <DatePicker menuName={menuNames.to} />
          </div>
        </li>

        <CaretLeftFill
          className="caretLeftFill"
          onClick={() => {
            setOpenSidNav(false);
          }}
        />
      </ul>
    </Row>
  );
};

export default SideNav;
