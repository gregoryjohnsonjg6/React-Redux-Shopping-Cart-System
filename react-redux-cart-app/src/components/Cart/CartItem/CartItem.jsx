import React, { useState } from "react";
import { connect } from "react-redux";
import CrossIcon from "./../../../assets/images/cross-icon.png";
import { adjustItemQty, removeFromCart } from "./../../../redux/shopping/shopping-actions";
import styles from "./CartItem.module.css";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className={styles.cartItem}>
      <img className={styles.cartItem__image} src={item.image} alt={item.title} />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}>$ {item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input min="1" type="number" id="qty" name="qty" value={input} onChange={onChangeHandler} />
        </div>
        <button onClick={() => removeFromCart(item.id)} className={styles.actions__deleteItemBtn}>
          <img src={CrossIcon} alt="cross-icon" />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
