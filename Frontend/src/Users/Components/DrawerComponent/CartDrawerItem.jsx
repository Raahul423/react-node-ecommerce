import { Button, Tooltip } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import api from '../../../Utils/api';
import { MyContext } from '../../../Provider';

const CartDrawerItem = () => {
  const { authloading,toastMessage } = useContext(MyContext);
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);

  if (authloading) {
    <div>Loading...</div>
  }

  useEffect(() => {
    const calTotal = cartProducts.reduce(
      (acc, item) => acc + (item.productItems?.price * item.quantity),
      0
    );
    setTotal(calTotal);
  }, [cartProducts]);


  useEffect(() => {
    const cartItems = async () => {
      const res = await api.get("/cartitems/allproducts");
      setCartProducts(res?.data?.cartItems);
    }
    cartItems();
  }, []);


  const deleteCartItem = async (productId) => {
    try {
      const itemId = productId;
      const res = await api.delete("cartitems/deleteitem",{
        data:{itemId}
      });
      console.log(res);
      
      toastMessage("success",res?.data?.message)

    } catch (error) {
      console.error(error?.message);
    }
  }

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
                      <p className="">₹{items?.productItems?.price.toLocaleString('en-IN')}.00</p>
                    </div>
                  </div>
                </div>


                <div onClick={()=>deleteCartItem(items?._id)}>
                  <Tooltip title='delete'>
                    <MdDelete className='text-2xl cursor-pointer rounded-full' />
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>



          <div className='fixed bottom-2 flex flex-col'>
            <div className='flex justify-between border-t-1 border-gray-600/50 py-3'>
              <p className='!font-medium'>{cartProducts.length} item</p>
              <p className='!font-medium'>₹{total.toLocaleString('en-In')}.00</p>
            </div>


            <div className='flex justify-between border-t-1 border-gray-600/50 py-3'>
              <p className='!font-medium'>Total (tax excl.)</p>
              <p className='!font-medium'>₹{total.toLocaleString('en-IN')}.00</p>
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

