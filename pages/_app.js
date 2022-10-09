import Layout from '../components/Layout'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import Item from '../components/item';
import ItemList from '../components/itemList'

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
      // console isn't happy because some keys are not unique
      const next = [...items, { itemName: itemText.current.value, itemPrice: itemPrice.current.value}];
      setItems(next);
      localStorage.setItem('items', JSON.stringify.next);
    }
  }

  return (
    // <Component {...pageProps} />
    /*
    Complete:
    - split item name and price components
    - separate price and items side by side horizontally
    - validate input and give error message when one of them are empty
    - enforce item price to not exceed 2 decimal places
    /*

    TODOS:
    - add option to delete items -> reduce cumulative price
    - keep track of cumulative price
    - dynamically update subtotal and tax stuff (?)
    */

    <>   
      <Layout>
      <div className={styles.form}>
        <form className={styles.actualform} onSubmit={addItem}>
          <label>Item Name:</label><br/>
          <input type="text" ref={itemText} id="iname" name="iname" maxLength={10}/><br/>
          <label>Item Price:</label><br/>
          <input type="number" step="0.01" ref={itemPrice} id="iprice" name="iprice"/><br/>
          <input type="submit" value="Add Item"/>
        </form>
      </div>
        <h2 className={styles.header}>Items</h2>
        <div className={styles.listWrapper}>
          <ItemList items={items}></ItemList>
        </div>

        {/* <div>
          <ul>
            <h2>Prices</h2>
            {items.map(item => (<li key={item.itemPrice}>{`\$ ${item.itemPrice}`}</li>))}
          </ul>
        </div> */}
      </Layout>
    </>
  )
}

export default MyApp
