var React = require('react');
var Presets = function(props) {
  let presetList = props.presets;
  //console.log(presetList)
  const presetNames = Object.keys(presetList);
  //// console.log(props.presets.iconTag)
  const presetMap = presetNames.map(el => {
    //console.log(presetList[el])
    return (
      <li
        className="presetListItems"
        data-key={el}
        onClick={props.presetDisplay}
      >
        <i
          data-key={el}
          onClick={props.presetDisplay}
          class={presetList[el].iconTag}
        />
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
        className="presetListMenu"
        onClick={props.togglePresetsDisplay}
        // onMouseEnter={props.togglePresetsHover}
        // onMouseExit={props.togglePresetsHover}
      >
        <i class="fas fa-list" />
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
module.exports = Presets
