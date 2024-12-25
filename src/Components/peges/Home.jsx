import React, { useState } from 'react';
import Footer from './Footer';
import Items from './Items';
import Categoris from './Categoris';
import ShowFullItem from './ShowFullItem';
import Navbar from '../Navbar';

const Home = () => {
  const items = [
    {
      id:1,
      title: 'Шоколадное взрыв',
      img:'первое.png',
      desc:'с орешками',
      opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
      opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
      category:'assorted',
      price:'200'
    },
    {
      id:2,
      title: 'Шоколадная любовь',
      img:'второе.png',
      desc:'с любовь',
      opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
      opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
      category:'milky',
      price:'200'
    },
    {
      id:3,
      title: 'Печенье счастье',
      img:'третье.png',
      desc:'с печенье',
      opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
      opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
      category:'milky',
      price:'200'
    },
    {
      id:4,
      title: 'Шоколадная мечта',
      img:'четвертое.jpg',
      desc:'с ягодами',
      opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
      opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
      category:'assorted',
      price:'200'
    },{
      id:5,
      title: 'Ягодное счастье',
      img:'пятое.png',
      desc:'с ягодами ',
      opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
      opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
      category:'candies',
      price:'300'
    },
    {
      id:6,
      title: 'Белое счастье',
      img:'шестое.png',
      desc:'с орешками',
      opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
      opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
      category:'milky',
      price:'200'
    },
    {
      id:7,
      title: 'Красивая эстетика',
      img:'седьмое.png',
      desc:'с орешками',
      opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
      opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
      category:'milky',
      price:'200'
    },
    {
      id:8,
      title: 'Новогоднее счастье',
      img:'восьмое.png',
      desc:'с фрукты',
      opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
      opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
      category:'milky',
      price:'200'
    },
    {
      id:9,
      title: 'Вкусные кружочки',
      img:'девятое.png',
      desc:'с орешками',
      opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
      opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
      category:'assorted',
      price:'200'
    },{
      id:10,
      title: 'Шоколадная сказка',
      img:'десятое.png',
      desc:'с орешками',
      opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
      opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
      category:'dragees',
      price:'200'
    }
    ,{
      id:11,
      title: 'Ягодное безумие',
      img:'одинатцатое.png',
      desc:'с орешками',
      opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
      opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
      category:'candies',
      price:'200'
    }
    ,{
      id:12,
      title: 'Дерево любви',
      img:'двинадцотое.png',
      desc:'с орешками',
      opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
      opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
      category:'dragees',
      price:'200'
    }
  ];
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState(items);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  const addToOrder = (item) => {
    if (!orders.find(el => el.id === item.id)) {
      setOrders(prevOrders => [...prevOrders, item]);
    }
  };

  const deleteOrder = (id) => {
    setOrders(prevOrders => prevOrders.filter(el => el.id !== id));
  };

  const chooseCategory = (category) => {
    setCurrentItems(category === 'all' ? items : items.filter(el => el.category === category));
  };

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };
  function showFilterItem() {
    var button = document.getElementById('filterButton');
    var filterStatus = button.getAttribute('data-filter-status') === 'true';
    button.textContent = filterStatus ? 'Показать меньше' : 'Показать больше';
    button.setAttribute('data-filter-status', !filterStatus);
  }
  return (
    <div className='wrapper'>
      <Navbar orders={orders} onDelete={deleteOrder} />
      <div className='presentesion'>
 
</div>
      <div className='uuio'>
        <h1 className='rty'>Каталог</h1>
        <Categoris chooseCategory={chooseCategory} />
        <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder} />
        {showFullItem && <ShowFullItem onAdd={addToOrder} onShowItem={onShowItem} item={fullItem} />}
      </div>
      <Footer />
      
    </div>
    
  );
};

export default Home;