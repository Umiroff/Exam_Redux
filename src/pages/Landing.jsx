import { useDispatch, useSelector } from "react-redux";
import '../pages/Landing.css';
import toyimli from '../assets/toyimli.webp';
import toyimli2 from '../assets/toyimli2.webp';
import deliverImg from '../assets/deliverimg.webp';
import donarSet from '../assets/donarset.webp';
import uchLik from '../assets/3lik.webp';
import { useEffect, useState } from "react";
import getStore from "../utilis/get";
import footer_logo from "../assets/footer-logo.svg";
import payme from "../assets/payme-footer.svg";
import uzcard from "../assets/uzcard-footer.svg";
import { FaFacebook } from "react-icons/fa";
import click from "../assets/click-footer.svg";
import humo from "../assets/humo-footer.svg";
import { LiaTelegram } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";




export default function Landing() {


  const {data} = useSelector((state) => state.cart);

  const [basket, setBasket] = useState(getStore('basket'));

  const handleproduct = (id) => {
    const newItem = data.find((item) => item.id === id);
    setBasket([...basket, newItem]);
  };

  


  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);


    
  return (
    <>
    <div className="main">

    <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src={toyimli} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={toyimli2} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={deliverImg} className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={donarSet} className="w-full" />
  </div>
  <div id="item5" className="carousel-item w-full">
    <img src={uchLik} className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-ghost">1</a> 
  <a href="#item2" className="btn btn-ghost">2</a> 
  <a href="#item3" className="btn btn-ghost">3</a> 
  <a href="#item4" className="btn btn-ghost">4</a>
  <a href="#item5" className="btn btn-ghost">5</a>
</div>





    <h2 className="categ">Pitsa</h2>
    <Link to='/basket'>
    <button className="btn btn-active btn-primary" >Savatcha</button>
    </Link>
      <div className="products">{data.map((item) => {
        const {id, title, description, price, img} = item;
        return (
        <div className="card w-96 bg-base-100 shadow-xl" key={id}>
          <figure><img src={img} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="card-desc">{description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost" onClick={() => handleproduct(id)}>{price} So'mdan</button>
            </div>
          </div>
        </div>)
      })}
      
      </div>
      </div>
        
      

<footer>
        <div>
          <ul>
            <li>
              <img src={footer_logo} width="250" alt="logo" />
            </li>
            <li>
              <p className="footer-item1">RAQAMGA QO'NG'IROQ QILING - 1174</p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="footer-items">
            <li>
              <a href="/">Biz haqimizda</a>{" "}
            </li>
            <li>
              <a href="/"> Ommaviy oferta</a>
            </li>
            <li>
              <a href="/">Maxfiylik siyosati</a>{" "}
            </li>
            <li>
              <a href="/">Halol setifikati</a>{" "}
            </li>
            <li>
              <a href="/">Restoranlar</a>{" "}
            </li>
          </ul>
        </div>
        <div>
          <ul className="footer-items">
            <li>
              <a href="/">Franchayzi</a>
            </li>
            <li>
              <a href="/">Bizning ish o'rinlarimiz</a>
            </li>
          </ul>
        </div>
        <div className="payments">
          <div>
            <img src={payme} width="100" alt="" />
            <img src={uzcard} width="50" alt="" />
          </div>
          <div>
            <img src={click} width="100" alt="" />
            <img src={humo} width="100" alt="" />
          </div>
        </div>
        <div>
          <p className="footer-text">Bizni kuzatib boring</p>
          <div className="icons">
            <FaFacebook className="facebook" />
            <FaInstagram className="insta" />
            <LiaTelegram className="telegram" />
          </div>
        </div>
      </footer>

      
    </>
    
  )
}


