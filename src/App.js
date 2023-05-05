// import { useState } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { evaluate, chain } from 'mathjs';

const App = () => {
  const [inputtext, setinputtext] = useState()
  const [items, setItems] = useState([]);

useEffect(() => {
  
})

  const Additem = () => {
    console.log(items)

    let itemscopy = [...items];

    itemscopy.push(inputtext)
    setItems(itemscopy)
  }




  const DeleteItem = (selectedIndex) => {

    let listCopy = [...items];

    listCopy.splice(selectedIndex, 1);

    setItems(listCopy)
  }


  const addresult = () => {
    setItems(chain(items).toString())


  }

  const subtractresult = () => {

  }


  const calculateBudget = () => {
    setinputtext(evaluate(inputtext).toString())
  };




  return (
    <div className="App">
      <h1>Budget Calculator</h1>

      <button id='additem' onClick={Additem} value={inputtext} onChange={(event) => setinputtext(event.target.value)}>Add Item</button>
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
                <option onClick={() => subtractresult}>Expense</option>
              </select>
            </div>

            <input id='input' type='number' pattern='[0-9]' placeholder='£' onChange={(event) => setinputtext(event.target.value)} ></input>
            <div className='minus'><button id='minus' onClick={DeleteItem}>X</button></div>
          </div>
        })} </div>




      </table>


      <div>
        {items.map((val, key) => {

          return <div onClick={() => { calculateBudget(key) }}>{val}</div>

        })}

        <div>  <button className='CalculateButton' onClick={() => { calculateBudget() }}>Add Calculations</button>
        <div>{inputtext}</div></div>
      </div>



    </div>
  );



}







export default App;
