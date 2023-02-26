import { useState, useEffect, useContext } from "react";
import { Lines } from "react-preloaders";
import CardItemsList from "./CardItemsList";
import Cart from "../Header/Cart";
import { OrderList } from "../Orders/OrderList";
import { ShopContext } from "../../context/Context";

const Main = () => {
	const {FetchData, SuccessData, FailedData, loading, isBasketShow} = useContext(ShopContext)
	// const b = useContext(ShopContext)
	// console.log(b)
	// const [goods, setGoods] = useState([]);
	// const [loading, setLoading] = useState(true);
	// const [order, setOrder] = useState([]);
	// const [isBasketShow, setIsBasketShow] = useState(false);

	// const addToBasket = (item) => {
	// 	const itemIndex = order.findIndex(
	// 		(orderItem) => orderItem.mainId === item.mainId
	// 	);
	// 	if (itemIndex < 0) {
	// 		const newItem = {
	// 			...item,
	// 			quantity: 1,
	// 		};
	// 		setOrder([...order, newItem]);
	// 	} else {
	// 		const newOrder = order.map((orderItem, index) => {
	// 			if (index === itemIndex) {
	// 				return {
	// 					...orderItem,
	// 					quantity: orderItem.quantity + 1,
	// 				};
	// 			} else {
	// 				return item;
	// 			}
	// 		});
	// 		setOrder(newOrder);
	// 	}
	// };

	// const handleBasket = () => {
	// 	setIsBasketShow(!isBasketShow);
	// };

	// const removeOrderFromOrders = (itemId) => {
	// 	const orders = order.filter((item) => item.mainId !== itemId);
	// 	setOrder(orders);
	// };

	// const incrementQuantity = (itemId) => {
	// 	const newOrder = order.map((item) => {
	// 		if (item.mainId === itemId) {
	// 			const newQuantity = item.quantity + 1;
	// 			return {
	// 				...item,
	// 				quantity: newQuantity,
	// 			};
	// 		} else {
	// 			return item;
	// 		}
	// 	});
	// 	setOrder(newOrder);
	// };

	// const decrementQuantity = (itemId) => {
	// 	const newOrder = order.map((item) => {
	// 		if (item.mainId === itemId) {
	// 			const newQuantity = item.quantity - 1;
	// 			return {
	// 				...item,
	// 				quantity: newQuantity >= 0 ? newQuantity : 0,
	// 			};
	// 		} else {
	// 			return item;
	// 		}
	// 	});
	// 	setOrder(newOrder);
	// };

	useEffect(() => {
		const key = import.meta.env.VITE_APP_API_KEY;
		const url = import.meta.env.VITE_APP_API_URL;
		FetchData()
		fetch(url, {
			headers: {
				Authorization: key,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				data.shop && SuccessData(data.shop);
			})
			.catch((err) => {
				FailedData()
				// console.log(err);
			});
	}, []);

	return (
		<div className="container content">
			<Cart  />
			{loading ? (
				<Lines background="#fff" />
			) : (
				<CardItemsList />
			)}
			{isBasketShow ? (
				<OrderList
					// order={order}
					// removeOrder={removeOrderFromOrders}
					// incrementQuantity={incrementQuantity}
					// decrementQuantity={decrementQuantity}
				/>
			) : null}
		</div>
	);
};

export default Main;
