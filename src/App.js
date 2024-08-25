import './App.css';
import React, { useState, useEffect } from 'react';


const array = [
  { id: 1, title: "chechbox-1", checked: false },
  { id: 2, title: "chechbox-2", checked: false },
  { id: 3, title: "chechbox-3", checked: false },
  { id: 4, title: "chechbox-4", checked: false },
  { id: 5, title: "chechbox-5", checked: false }
]

function App() {
  const [checkboxArray, setCheckboxArray] = useState(array);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const checkedCount = checkboxArray.filter((each) => each.checked == true);
    setCount(checkedCount.length);
  }, [checkboxArray]);


  const handleCheckbox = (e, Id) => {
    const { checked } = e.target;
    setCheckboxArray(prevArray =>
      prevArray.map(each => each.id == Id ? { ...each, checked } : each)
    )
  }

 
  const handleSelectAll = (val) => {
   const updated = checkboxArray.map(each => ({
    ...each,
    checked: val == "all"
   }));
   setCheckboxArray(updated);
  }

  return (
    <div className="App">
      <h1 className='header'>Checkbox Challenge</h1>
      <div className="container">

        {checkboxArray && checkboxArray.map((each) => (
          <div className='chechbox-row' key={each.id}>
            <input type="checkbox"
              name={"checkbox-" + each.id}
              id={each.id}
              className='single-checkbox'
              checked={each.checked}
              onChange={(e) => handleCheckbox(e, each.id)}
            />
            <h4>{each.title}</h4>
          </div>
        ))}

        <div className='Buttons-row'>
          <button type="button" onClick={()=>handleSelectAll("all")}>Select All</button>
          <button type="button" onClick={()=> handleSelectAll("none")}>DeSelect All</button>
        </div>
        <div className='footer'>
          <h3>Selected checkboxes Count: {count}</h3>
        </div>

      </div>
    </div>
  );
}

export default App;
