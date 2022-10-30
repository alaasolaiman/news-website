import { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { linkContext } from "../../layouts/Articles";
import { uid } from "uid";

import "./index.css";

function Radio({ menu, menuName }) {
  const { setNewsApiInitialState } = useContext(linkContext);
  const [radioMenu, setRadioMenu] = useState(menu);

  const handleRadio = ({ name, checked }) => {
    setRadioMenu((pre) => {
      return { ...pre, [name]: { ...pre[name], checked: checked } };
    });
  };
  useEffect(() => {
    let checkedList = [];
    Object.keys(radioMenu).map((radioItem) => {
      if (radioMenu[radioItem].checked) {
        checkedList.unshift(radioItem);
      }
      return radioItem;
    });
    setNewsApiInitialState((pre) => {
      return { ...pre, [menuName]: checkedList.toString() };
    });
  }, [radioMenu, menuName, setNewsApiInitialState]);

  return (
    <Form>
      {Object.keys(radioMenu).map((radioItem) => {
        return (
          <Form.Check
            key={uid()}
            className="formCheck"
            type={radioMenu[radioItem].type}
            label={radioItem}
            defaultChecked={radioMenu[radioItem].checked}
            name={radioItem}
            onChange={(event) => {
              handleRadio(event.target);
            }}
          />
        );
      })}
    </Form>
  );
}

export default Radio;
