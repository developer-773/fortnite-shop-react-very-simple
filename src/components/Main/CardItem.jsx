import { useContext } from "react";
import { ShopContext } from "../../context/Context";

const CardItem = ({ mainId, displayName, displayType, price, displayAssets }) => {
	const {addToBasket} = useContext(ShopContext)

	return (
		<div className="card m-4" id={mainId} style={{ width: "23rem" }}>
			<img
				src={displayAssets[0]?.full_background}
				className="card-img-top"
				alt={displayName}
			/>

			<div className="card-body">
				<h5 className="card-title">{displayName}</h5>
				<p className="card-text">{displayType}</p>
				<div className="d-flex justify-content-between align-items-center pt-4">
					<button className="btn btn-success" onClick={() => addToBasket({mainId, displayName, price})}>Buy</button>
					<span className="p-2 bg-info rounded">${price.regularPrice}</span>
				</div>
			</div>
		</div>
	);
};

export default CardItem;
