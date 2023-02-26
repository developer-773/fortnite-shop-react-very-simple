import { useContext } from "react"
import { ShopContext } from "../../context/Context"

const Cart = () => {

  const {order, handleBasket = Function.prototype} = useContext(ShopContext)
  const quantity = order.length

  return (
    <div className="d-flex justify-content-end position-fixed pointer bg-info p-3 rounded end-0 " style={{cursor: "pointer"}} onClick={handleBasket}>Cart {quantity ? quantity : null}</div>
  )
}

export default Cart