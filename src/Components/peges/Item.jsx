import React, { useState } from 'react';

const Item = ({ item, onShowItem, onAdd }) => {
  const [animating, setAnimating] = useState(false);

  const handleAddToCart = () => {
    setAnimating(true);
    onAdd(item);
    setTimeout(() => setAnimating(false), 500); 
  };

  return (
    <div className='item'>
      <img 
        src={`./img/${item.img}`} 
        alt={item.title} 
        onClick={() => onShowItem(item)} 
        className={animating ? 'animate' : ''}
      />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>Цена: {item.price}$</b>
      <button className='add-to-cart' onClick={handleAddToCart}>
        Корзина
      </button>
    </div>
  );
}

export default Item;