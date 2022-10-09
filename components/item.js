import itemStyles from '../styles/Item.module.css'; 

const Item = ({item}) => {
    return (
        <div className={itemStyles.card}>
            <h1>
                {item.itemName}
            </h1>
            <h6>
                ${item.itemPrice}
            </h6>
        </div>
    )
}

export default Item;