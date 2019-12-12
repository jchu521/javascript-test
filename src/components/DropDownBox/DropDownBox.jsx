import React, { useState, useCallback } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "./DropDownBox.css";

const initialDropDownBox = Array(7).fill({ isToggle: false, showBody: false });

export default function DropDownBox() {
  const [, updateState] = React.useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const [dropDownBox, setDropDownBox] = useState(initialDropDownBox);

  const handleDropDown = i => {
    let newDrop = dropDownBox.map((v, index) => ({
      isToggle: index === i ? !dropDownBox[i].isToggle : false,
      showBody: index === i ? !dropDownBox[i].showBody : false
    }));
    setDropDownBox(newDrop);
    forceUpdate();
  };

  return (
    <div>
      {dropDownBox.map((item, i) => (
        <div key={i} className="dropdownbox-container">
          <div className="dropdownbox">
            <div
              className="dropdownbox-header"
              onClick={() => handleDropDown(i)}
            >
              <div>LOREM IPSUM</div>
              <FontAwesomeIcon icon={item.isToggle ? faAngleUp : faAngleDown} />
            </div>
          </div>
          {item.showBody ? (
            <div className="dropdownbox-body">
              Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed
              quis massa pulvinar justo interdum tempor. Maecenas lobortis
              tristique massa, sit amet malesuada elit dignissim ut.
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
