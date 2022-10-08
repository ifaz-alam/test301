import '../styles/globals.css'
import React, { useEffect, useState, useRef } from "react";
import './checkbox.js'
function MyApp({ Component, pageProps }) {
  // State
  const [items, setItems] = useState([]);
  
  // Binding
  const itemText = useRef();
  const itemPrice = useRef();
  
  /*
  // Side Effects / Lifecycle - Grabs item from local storage when component is first initialized
  useEffect(() => {
    const existingItems = localStorage.getItem('items');
    setItems(existingItems ? JSON.parse(existingItems) : []);
  }, []);
  */

  function addItem(event) {
    event.preventDefault();
    const next = [...items, `${itemText.current.value} \$${itemPrice.current.value}`];
    setItems(next);
    localStorage.setItem('items', JSON.stringify.next);
  }

  return (
  // <Component {...pageProps} />
    <div>
      <ul>
        {items.map(item => (
        <>
        <li key={item}>{item}</li>
        </>
        ))}
      </ul>

      <form onSubmit={addItem}>
        <label for="iname">Item Name:</label><br/>
        <input type="text" ref={itemText} id="iname" name="iname"/><br/>
        <label for="iprice">Item Price:</label><br/>
        <input type="iprice" ref={itemPrice} id="iprice" name="iprice"/><br/>
        <input type="submit" value="Add Item"/>
      </form>
    </div>
  )
}

export default MyApp
