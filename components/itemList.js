import Item from './item';
import ItemListStyles from '../styles/ItemList.module.css';

const ItemList = ({items}) => {
    return (
        <div className={ItemListStyles.ItemList}>
            {items.map((item) => (
                <Item item={item}></Item>
            ))}
        </div>
    )
}

export default ItemList;