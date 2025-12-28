import { Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router';
import api from '../../../Utils/api';
import { MyContext } from '../../../Provider';

const CartDrawerItem = () => {
  const { authloading } = useContext(MyContext);
  const [cartProducts, setCartProducts] = useState([]);


  if (authloading) {
    <div>Loading...</div>
  }

  useEffect(() => {
    const cartItems = async () => {
      const res = await api.get("/cartitems/allproducts");
      console.log(res);

      setCartProducts(res?.data?.cartItems);
    }
    cartItems();
  }, []);

  return (
    <section className='my-container py-4 relative'>
      <div>
        <h1>Shopping Cart ({cartProducts.length})</h1>
      </div>

      <span className='horizontal-line' />

      {cartProducts.length === 0 ?
        <div className='h-full flex justify-center items-center flex-col'>
          <img className='object-cover ' src="/cart.png" alt="error" />
          <p className='!text-2xl'>Please Add Items...</p>
        </div>
        :
        <>
          <div className='scroll !max-h-[550px] '>
            {cartProducts.map((items, idx) => (
              <div key={idx} className='flex justify-between items-center px-1 py-2  border-b-1 border-gray-600/50'>
                <div className='flex gap-4'>
                  <div className="h-20 w-20 overflow-hidden rounded-md flex items-center justify-center">
                    <img className='h-15 w-15 rounded-md object-cover object-top hover:scale-110 transition-all ease-in-out cursor-pointer' src={items?.productItems?.images[0]?.url} alt="error" />
                  </div>

                  <div className='flex flex-col justify-center '>
                    <p className="text-gray-800/90 two-line-ellipsis">{items?.productItems?.brand}</p>
                    <div className='flex gap-4 justify-around'>
                      <p className="text-gray-800/90">Qty : {items.quantity}</p>
                      <p className="">₹{items?.productItems?.price}.00</p>
                    </div>
                  </div>
                </div>


                <div>
                  <MdDelete className='text-2xl' />
                </div>
              </div>
            ))}
          </div>



          <div className='fixed bottom-2 flex flex-col'>
            <div className='flex justify-between border-t-1 border-gray-600/50 py-3'>
              <p className='!font-medium'>{cartProducts.length} item</p>
              <p className='!font-medium'>₹1,784.00</p>
            </div>


            <div className='flex justify-between border-t-1 border-gray-600/50 py-3'>
              <p className='!font-medium'>Total (tax excl.)</p>
              <p className='!font-medium'>₹1,784.00</p>
            </div>


            <div className='flex justify-between gap-6'>
              <Link to={'/cart'}>
                <Button className='flex gap-4 items-center w-fit !border-1 !border-primary hover:!border-black !bg-primary hover:!bg-black !px-10 !py-3'>
                  <p className='text-white text-sm'>View Cart</p>
                </Button>
              </Link>

              <Link to={'/checkout'} >
                <Button className='flex gap-4 items-center w-fit !border-1 !border-primary hover:!border-black  hover:!bg-black !px-10 !py-3 group'>
                  <p className='text-primary text-sm group-hover:text-white'>Checkout</p>
                </Button>
              </Link>

            </div>
          </div>

        </>
      }


    </section>
  )
}

export default CartDrawerItem

