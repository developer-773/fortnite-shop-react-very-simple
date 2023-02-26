import React, { useContext } from 'react'
import { ShopContext } from '../../context/Context'

export const OrderItem = ({mainId, displayName, quantity, price }) => {

  const { incrementQuantity, decrementQuantity, removeOrderFromOrders} = useContext(ShopContext)

  return (

   <p className='p-3 position-relative'>
    {displayName} x {quantity} = <b>$</b> {price.regularPrice * quantity}
    <button className='btn btn-primary ms-5 me-3' onClick={() => incrementQuantity(mainId)}>+</button>
    <button className='btn btn-primary' onClick={() => decrementQuantity(mainId)}>-</button>
   <button className='btn btn-danger position-absolute' style={{right: "4rem"}} onClick={() => removeOrderFromOrders(mainId)}>Delete</button>
   </p>
  )
}
