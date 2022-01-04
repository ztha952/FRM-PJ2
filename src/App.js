
import {useState} from 'react'
import Nav from "./components/Nav";
import Image from './Image.js'
import Cart from './components/Cart.js'
import Buy from './images/icon-cart.svg'
import incre from "./images/icon-plus.svg";
import decre from "./images/icon-minus.svg";
import Carousel from 'react-elastic-carousel'
import Card from './Card.js'




function App() {
  const [select, setSelect] = useState(Image[0].img);

const [show, setShow] = useState(false);
const clicked = ()=> {
  setShow(!show)
}

const [num, setNum] = useState(0);

const decrease = () => {
  if(num > 0){
    setNum(num-1)
  }
}

const clear =()=> {
  setNum(num * 0)
}



const success =() => {
  alert('Thanks for purchasing with us')
}



  return (
    <>
      
        <div className="sm:w-9/12 w-11/12 mx-auto relative">
        <Nav clicked={clicked} />
          <div className="p-8 sm:flex gap-10 items-center ">

    <div>

        <div className='hidden md:block'>
          <div className='flex flex-col relative'>
            <img className="rounded-2xl" src={select} alt="image" />
          </div>
          <div className='mt-5 inline-grid grid-cols-4 gap-4'>
          {Image.map(({tum, id, img}) => (
          <div className="hover:border-2 border-amber-500">
            <img className="rounded-lg" src={tum} alt="id" key={id} onClick={() => setSelect(img)} />
            </div>
            ))}
          </div>
          </div>
          <div className='md:hidden'>
          <Carousel>
          <Card cp={Image[0].img} />
          <Card cp={Image[1].img} />
          <Card cp={Image[2].img} />
          <Card cp={Image[3].img} />
          </Carousel>
          </div>
          
          {show ? <Cart view={select} total={num} clear={clear}  success={success} /> : null }
          
    </div>
            

            <div className="right my-2 flex flex-col gap-4">
              <div className="flex flex-col justify-items-center gap-5">
                <p className="font-medium uppercase text-orange-400">
                  Sneaker Company
                </p>
                <h1 className="uppercase font-bold text-4xl text-gray-900">
                  Fall Limited Edition Sneakers
                </h1>
                <p className="text-gray-600 font-medium">
                  These low-profile sneakers are your perfect casual wear
                  companion. Featuring a durable rubber outer sole, they’ll
                  withstand everything the weather can offer.
                </p>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-800">
                  $125.00
                </span>{" "}
                <span className="bg-orange-100 text-orange-500 font-bold p-1 mx-2">
                  50%
                </span>
              </div>
              <div>
                <p className="text-gray-500 line-through">$250.00</p>
              </div>
              <div className="flex gap-3">
                <div className="rounded-lg flex gap-5 bg-gray-200 items-center py-2 px-3">
      <img className="left1" src={decre} onClick={decrease} />
      <input
        type="text"
        className="qty w-6 text-center bg-gray-200"
        id="qty"
        value={num}
      />

      <img className="right1" src={incre} onClick={() => setNum(num + 1)} />
    </div>
                <button className="px-10 text-white flex items-center gap-2 rounded-lg text-sm bg-orange-500" onClick={clicked}>
                  <img src={Buy} /> Add to cart
                </button>
                
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default App;
