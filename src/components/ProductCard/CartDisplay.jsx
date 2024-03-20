import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../../contexts/CartProvider";
import styles from "./CartDisplay.module.css"

const CartDisplay = ({ element, id }) => {
  const navigate = useNavigate();
  const { deleteFromCart } = useContext(CartContext);

  return (
    <>
      <img
        src={element.imageUrl}
        alt={element.name}
        width="100px"
        onClick={() => {
          navigate(`/cars/${element.id}`);
        }}
        className={styles.carImage}
      />

      <div className={styles["menu-info"]}>
        <div className={styles["menu-details1"]}>
          <Link to={`/cars/${element.id}`}>
            <h6>{element.name}</h6>
          </Link>

          <p>Code: #{element.id}</p>
          <p>Engine Capacity: {element.engine}</p>
        </div>

        <div className={styles["price-color"]}>
          <div className={styles["menu-color"]}>
            <p>{element.colors}</p>
          </div>
          <div className={styles["price-quant"]}>
            <div className={styles["menu-price"]}>
              <p>$ {element.rentPrice * element.quantity} </p>
            </div>
            <div className={styles["menu-quant"]}>
              <p>{element.quantity}</p>
            </div>
          </div>
        </div>

        <div className={styles["delete-car"]}>
          <button onClick={() => deleteFromCart(id)}>×</button>
        </div>
      </div>
    </>
  );
};

export default CartDisplay;
