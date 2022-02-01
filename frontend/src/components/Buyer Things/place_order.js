import { useEffect, useState } from "react";
import axios from "axios";
import UserFoodTable from "./buyer_foodTable";
import Add_order from "./add_order";
import { useHistory } from "react-router-dom";

const Place_order = ({ user }) => {
  const [foodList, setFoodList] = useState({
    data: [],
  });
  const history = useHistory();
  const [order, setOrder] = useState(null);
  const [quant, setQuant] = useState(1);
  const [wallet, setWallet] = useState({});
  useEffect(() => {
    axios.get("http://localhost:4000/food").then((res) => {
      setFoodList({ data: res.data });
    });
    axios.post("http://localhost:4000/buyer/get_wallet", {email: user.email})
    .then((res) => {
      setWallet(res.data.wallet)
    })
  }, []);

  

  const handleQuantityChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setQuant(value);
    
  };

  const handleSubmitOrder = () => {
      // Order and Quant have the food and quantity in them.
      const response = {
          food_name: order.food_name,
          vendor_email: order.vendor_email,
          food_id: order._id,
          state: "PLACED",
          quantity: quant,
          cost: order.price*quant,
          user_email: user.email
      }
      const newAmount = wallet.amount - response.cost

      // response has everything we need
      if(newAmount > 0){
        axios.post("http://localhost:4000/buyer/place_order", response)
        axios.post("http://localhost:4000/buyer/transaction", {email: user.email, newAmount: newAmount})
        .then((res) => {
            alert("Order Placed")
            history.push("/")
        })
        .catch((err) => {
            alert("Order Not Placed. :/", err)
        })
      }else{
        alert("Order cannot be placed. Check your Balance")
      }
  };

  const handlePlaceOrder = (event, food) => {
    event.preventDefault();
    setOrder(food);
  };

  return (
    <div>
      {(() => {
        if (order) {
          return (
            <Add_order
              handleQuantityChange={handleQuantityChange}
              order={order}
              handleSubmitOrder={handleSubmitOrder}
            />
          );
        } else {
          return (
            <UserFoodTable
              handlePlaceOrder={handlePlaceOrder}
              foodList={foodList}
            />
          );
        }
      })()}
    </div>
  );
};

export default Place_order;
