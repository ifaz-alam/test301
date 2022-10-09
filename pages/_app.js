import Layout from '../components/Layout'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'

import React, { useEffect, useState, useRef } from "react";
import './checkbox.js'
function MyApp({ Component, pageProps }) {
  // State
  const [items, setItems] = useState([]);
  
  // Binding our input fields as a way to access the DOM
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
    if (itemText.current.value.length == 0 || itemPrice.current.value.length == 0) {
      alert("BOY put values in both fields");
      // doesnt reload the page
      event.preventDefault();
    }
    
    else {
      event.preventDefault();
      const next = [...items, { itemName: itemText.current.value, itemPrice: itemPrice.current.value}];
      setItems(next);
      localStorage.setItem('items', JSON.stringify.next);
    }
  }

  return (
    // <Component {...pageProps} />
    //need to split item name and price components
    //trying to separate price and items side by side horizontally
    //also need to add option to delete items in future
    // need to validate input and give error message when one of them are empty

    <>   
      <Layout>
        <div>
          <ul>
            <h2>Items</h2>
            {items.map(item => (<li key={item.itemName}>{item.itemName}</li>))}
          </ul>
        </div>

        <div>
          <ul>
            <h2>Prices</h2>
            {items.map(item => (<li key={item.itemPrice}>{`\$ ${item.itemPrice}`}</li>))}
          </ul>
        </div>
        
        <div>
          <form onSubmit={addItem}>
          <label>Item Name:</label><br/>
          <input type="text" ref={itemText} id="iname" name="iname"/><br/>
          <label>Item Price:</label><br/>
          <input type="number" ref={itemPrice} id="iprice" name="iprice"/><br/>
          <input type="submit" value="Add Item"/>
          </form>
        </div>
      </Layout>
    </>
  )
}

export default MyApp
