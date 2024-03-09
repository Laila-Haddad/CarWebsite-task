import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MenuDisplay = ({ element , deleteCar , id}) => {
  const navigate = useNavigate();
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
          <button onClick={()=> deleteCar(element.id , id)}>×</button>
        </div>
      </div>
    </>
  );
};

export default MenuDisplay;
