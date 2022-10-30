import { useContext } from "react";
import { changeDateFormat, dateToMonthBefore } from "../../helpers";

import { linkContext } from "../../layouts/Articles";

import "./index.css";

function DatePicker({ menuName }) {
  const { setNewsApiInitialState } = useContext(linkContext);

  const changeOptionValue = ({ value }) => {
    setNewsApiInitialState((pre) => {
      return { ...pre, [menuName]: value };
    });
  };
  return (
    <input
      className="datePicker"
      type="date"
      min={dateToMonthBefore(new Date().toLocaleDateString())}
      max={changeDateFormat(new Date().toLocaleDateString())}
      onChange={(event) => {
        changeOptionValue(event.target);
      }}
    />
  );
}

export default DatePicker;
