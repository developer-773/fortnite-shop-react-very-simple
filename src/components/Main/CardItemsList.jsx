import { useContext } from "react";
import { ShopContext } from "../../context/Context";
import CardItems from "./CardItem";

const CardItemsList = () => {
    const {goods = []} = useContext(ShopContext)
	// const { goods = [], addToBasket } = props;
    if(!goods.length) {
        return <h3>Nothing here...</h3>
    }
	return <ul className="d-flex flex-wrap gap-3 list-unstyled">
        {goods.map((item) => (
            <CardItems key={item.mainId} {...item}/>
        ))}
    </ul>;
};

export default CardItemsList;
