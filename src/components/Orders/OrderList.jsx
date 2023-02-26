import React, { useContext } from 'react'
import { ShopContext } from '../../context/Context'
import { OrderItem } from './OrderItem'


export const OrderList = () => {

  const {order, handleBasket} = useContext(ShopContext)

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.regularPrice * el.quantity
  }, 0)

  return (
  <ul className='list-group w-50 position-fixed top-50 start-50 translate-middle bg-light'>
    <li className='list-group-item active'>
      Order
      <button className='btn btn-danger px-3 py-1 position-absolute top-0' style={{right: 0}} onClick={handleBasket}>X</button>
      </li>
   {order.length ? order.map(item => (
     <OrderItem key={item.mainId} {...item} />
     )) : <li className='list-group-item'>Basket is empty</li>}
     <li className='list-group-item active'>Total price: <b>$</b>{totalPrice}</li>
  </ul>
  )
}
