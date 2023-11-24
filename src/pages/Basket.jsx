import { useDispatch, useSelector } from "react-redux";
import getStore from "../utilis/get"
import { Link } from "react-router-dom";
import './Basket.css';


export default function Basket() {

  const {data} = useSelector((state) => state.cart)

  console.log(getStore('basket'));
  const dispatch = useDispatch();

  return (
    <div className="main">
      <div className="products">{getStore('basket').map((item) => {
        const {id, title, description, price, img} = item;
        return (
        <div className="card w-96 bg-base-100 shadow-xl" key={id}>
          <figure><img src={img} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="card-desc">{description}</p>
            <div className="card-actions justify-end">
              <Link to='/'>
              <button className="btn btn-ghost">{price} So'mdan</button>
              </Link>
            </div>
          </div>
        </div>)
      })}
      
      </div>
    </div>
  )
}
