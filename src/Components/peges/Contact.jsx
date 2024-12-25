import React, {  useState } from 'react';
import Navbar from '../Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className="contact1">
    <h1>Контактная информация</h1>
    <div className='contac2'>
    <div className='odin'>
      <h2>Телефон:
     </h2>
      <h2>8 (495) 419-30-15</h2>
      <h2>Электронная почта:</h2>
      <h2>sugar.info@yandex.ru</h2>
    </div>
    <div className='dva'>
      <h2 className='recvizit'>Реквизиты
      </h2>
      <h2>ООО "Sugar"
      </h2>
      <h2>ИНН  74569256923
      </h2>
      <h2>КПП 47949830
      </h2>
      <h2>ОГРН 1840301840514</h2>
    </div></div>
    <div className='karta'></div>
    <div className='dva1'>
    <h2>Адрес:</h2>
    <h2>Москва, Кутузовский проспект, 48м.<br></br> Славяновский бульварТЦ <br></br>"Времена года"</h2>
</div>
  </div>
  );
};
const App = () => {
  const [orders, setOrders] = useState([]);


  const deleteOrder = (id) => {
    setOrders(prev => prev.filter(el => el.id !== id));
  };



  return (
    <div className='wrapper'>
      <Navbar orders={orders} onDelete={deleteOrder} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;