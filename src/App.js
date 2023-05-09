// import { useState } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
// import { evaluate, chain } from 'mathjs';

const App = () => {
  const [inputtotal, setinputtotal] = useState()
  const [items, setItems] = useState([]);
  const [numbers, setNumbers] = useState([])

  // useEffect(() => {
  //   const total = () => {
  //     let value = 0;
  //     for (let i = 0; i < inputtotal.length; i++) {
  //       console.log(typeof inputtotal[i])
  //       value += parseInt(inputtotal[i])
  //     }
  //     setinputtotal(value)
  //   };
  //   total();
  // }, [inputtotal])


  useEffect(() => {
    const total = () => {
      let value = 1;
      if (value === 1) {
        value += 0;
      };
    }
    total();


  })

  // Item functionality

  const Additem = () => {
    console.log(items)

    let itemscopy = [...items];

    itemscopy.push(items)
    setItems(itemscopy)
  }

  const DeleteItem = (selectedIndex) => {

    let listCopy = [...items];

    listCopy.splice(selectedIndex, 1);

    setItems(listCopy)
  }


  // Number functionality

  // const subtractresult = () => {


  // }


  const calculateBudget = (arr) => {
    let total = 0;
    if (Array.isArray(arr))
      arr.forEach((value) => {
        total += value;
      });
    return total;


  };

  const addresult = (event) => {
    // setNumbers([...numbers, Math.floor(Math.random() + 1)])
    setNumbers(event.target.value)


  }

  return (
    <div className="App">
      <h1>Budget Calculator</h1>

      <button id='additem' onClick={Additem} value={inputtotal} onChange={(event) => setinputtotal(event.target.value)}>Add Item</button>
      <table className="Tablegroup">
        <div className='titles'>
          <th>Date</th><th>Description</th><th>Type</th><th>Amount</th>
        </div>

        <div className='boxes'>{items.map((val, key) => {
          return <div className='ItemColumn'>

            <input id='input' type='text' placeholder='Add Items etc'  ></input>
            <input id='input' type='text' placeholder='Description' ></input>

            {/* dropdown list */}
            <div className='dropdown'>
              <select className='droplist'>
                <option onClick={() => addresult}>Income</option>
                <option>Expense</option>
              </select>
            </div>

            <input id='input' type='number' value={numbers} pattern='[0-9]' placeholder='£' onChange={(addresult)} ></input>
            <div className='minus'><button id='minus' onClick={DeleteItem}>X</button></div>
          </div>
        })} </div>

        

      </table>

      <button className='CalculateButton' onClick={() => { calculateBudget() }}>Add Calculations</button>

      <div><h3>{numbers}</h3></div>

    </div>



  );



}

export default App;
