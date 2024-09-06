import React, { useState } from "react";
import data from "./Data";
import "./styles.css";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enable, setEnable] = useState(false);
  const [multi, setMulti] = useState([]);


  const handleSingleSelection = (id) => {
    setSelected(id);
  };


  const handlemulti = (id) => {
    
    const cpy = [...multi];
    const findindex = cpy.indexOf(id);
    console.log(findindex);
    if (findindex === -1) {
      cpy.push(id);
    } else {
      cpy.splice(findindex, 1);
    }
    setMulti(cpy);
  };


  console.log(selected, multi);


  return (
    <div className="wrapper">
    
      <button
        onClick={() => {
          setEnable(!enable)
          setSelected(null);
        }}
      >
        multi selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataitem) => (
            <div className="item" key={dataitem.id}>
              <div
                onClick={
                  enable
                    ? () => handlemulti(dataitem.id)
                    : () => handleSingleSelection(dataitem.id)
                }
                className="title"
              >
                <h3>{dataitem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataitem.id || multi.indexOf(dataitem.id) !== -1 ? (
                <div className="content">{dataitem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>nodata</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
