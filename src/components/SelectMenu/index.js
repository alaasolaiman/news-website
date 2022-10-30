import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { linkContext } from "../../layouts/Articles";
import { uid } from "uid";

import "./index.css";

function SelectMenu({ list, menuName, newsObject }) {
  const { setNewsApiInitialState } = useContext(linkContext);
  const [selectedOption, setSelectedOption] = useState("");

  const changeOptionValue = ({ value }) => {
    setSelectedOption(value);
    setNewsApiInitialState((pre) => {
      return { ...pre, [menuName]: value };
    });
  };

  return (
    <Form.Select
      aria-label="Default select example"
      className="languageSelect"
      onChange={(event) => {
        changeOptionValue(event.target);
      }}
      value={selectedOption}
    >
      {list.map((item) => {
        return (
          <option
            key={uid()}
            value={newsObject[item]}
            className={`${newsObject[item] === selectedOption ? "sss" : ""}`}
          >
            {item}
          </option>
        );
      })}
    </Form.Select>
  );
}

export default SelectMenu;
