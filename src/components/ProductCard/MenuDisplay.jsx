import React  , {useContext}from "react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../../contexts/CartProvider";

const MenuDisplay = ({ element , id}) => {
  const navigate = useNavigate();

  const { deleteFromCart} = useContext(CartContext)

  return (
    <>
      <img
        src={element.imageUrl}
        alt={element.name}
        width="100px"
        onClick={() => {
          navigate(`/cars/${element.id}`);
        }}
      />

      <div className="menu-info">
        <div className="menu-details1">
          <Link to={`/cars/${element.id}`}>
            <h6>{element.name}</h6>
          </Link>

          <p>Code: #{element.id}</p>
          <p>Engine Capacity: {element.engine}</p>
        </div>

        <div className="price-color">
          <div className="menu-price">
            <p>$ {element.rentPrice}</p>
          </div>
          <div className="menu-color">
            <p>{element.colors}</p>
          </div>
        </div>

        <div className="delete-car">
          <button onClick={()=> deleteFromCart(id)}>×</button>
        </div>
      </div>
    </>
  );
};

export default MenuDisplay;
