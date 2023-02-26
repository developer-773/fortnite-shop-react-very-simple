export const Reducer = (state, { type, payload }) => {
	switch (type) {
		case "PENDING": {
			return {
				...state,
				loading: true,
			};
		}
		case "SUCCESS": {
			return {
				goods: payload.data || [],
				loading: false,
				order: []
			};
		}
		case "FAILED": {
			return {
				...state,
				error: "Something went wrong! Try again!",
				loading: false,
			};
		}
		case "ADD_TO_BASKET": {
			const itemIndex = state?.order?.findIndex(
				(orderItem) => orderItem?.mainId === payload?.mainId
			);
			let newOrder = null;
			if (itemIndex < 0) {
				const newItem = {
					...payload,
					quantity: 1,
				};
				newOrder = [...state?.order, newItem];
			} else {
				newOrder = state?.order?.map((orderItem, index) => {
					if (index === itemIndex) {
						return {
							...orderItem,
							quantity: orderItem?.quantity + 1,
						};
					} else {
						return item;
					}
				});
			}
			return {
				...state,
				order: newOrder,
			};
		}
		case "INCREMENT_QUANTITY": {
			return {
				...state,
				order: state.order.map((item) => {
					if (item.mainId === payload.id) {
						const newQuantity = item.quantity + 1;
						return {
							...item,
							quantity: newQuantity,
						};
					} else {
						return item;
					}
				}),
			};
		}
		case "DECREMENT_QUANTITY": {
			return {
				...state,
				order: state.order.map((item) => {
					if (item.mainId === payload.id) {
						const newQuantity = item.quantity - 1;
						return {
							...item,
							quantity: newQuantity >= 0 ? newQuantity : 0,
						};
					} else {
						return item;
					}
				}),
			};
		}
		case "TOGGLE_BASKET": {
			return {
				...state,
				isBasketShow: !state.isBasketShow,
			};
		}
		case "REMOVE_FROM_ORDER": {
			return {
				...state,
				order: state.order.filter((item) => item.mainId !== payload.id),
			};
		}

		default:
			return state;
	}
};

