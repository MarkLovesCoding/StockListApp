import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {FaList} from 'react-icons/fa';
var iconSize = 25;

var Presets = function(props) {
  let presetList = props.presets;
  const presetNames = Object.keys(presetList);
  const presetMap = presetNames.map(el => {
    return (
      <li
        className={"presetListItems"+" "+"waves-effect"}
        data-key={el}
        onClick={props.presetDisplay}
      >
       { presetList[el].iconTag }

        <h4 data-key={el} onClick={props.presetDisplay}>
          {el}
        </h4>
      </li>
    );
  });
  //present PresetList menu
  if (!props.presetsListDisplay || props.presetsListMenuDisplay) {
    return (
      <div
        style={{ cursor: "pointer" }}
        className={"presetListMenu"+" "+"waves-effect"}
        onClick={props.togglePresetsDisplay}
      ><i>
      <FaList size={iconSize} /></i>
      </div>
    );
  } else {
    //present presets
    return (
      <div className="presetList">
        <div className="minimize" onClick={props.togglePresetsDisplay}>
          <span />
        </div>
        <ul className="presets">{presetMap}</ul>
      </div>
    );
  }
}
export default Presets
