import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import Card from './Components/Card/Card';
import Modal from 'react-modal'; //modal creating
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root'); // for modal

function App() {
  const[guns, setGun]=useState([]);
  const [cart, setCart]=useState([]);
  const [modalIsOpen, setIsOpen] = useState(false); // for modal
// for open modal
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handleAddToCart=(gun)=>{
    const newCart=[...cart, gun]
    setCart(newCart)
  }

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
    .then(res=>res.json())
    .then(data=>setGun(data))
  },[])
  return (
    <div className="App">
      <Navbar cart={cart} openModal={openModal}></Navbar> 
      
      <div className='card-container'>
          {
            guns.map(gun=> <Card key={gun.id} gun={gun} handleAddToCart={handleAddToCart}></Card> )
          }
      </div> 

       //for modal
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>Close</button>
          <div>
            {
              cart.map(item => <h1 key={item.id}> {item.name}</h1> )
            }
          </div>
        </Modal>
    </div>
  );
}

export default App;
