import halal from '../assets/halal-cert.webp';
import './Halal.css';
import footer_logo from "../assets/footer-logo.svg";
import payme from "../assets/payme-footer.svg";
import uzcard from "../assets/uzcard-footer.svg";
import { FaFacebook } from "react-icons/fa";
import click from "../assets/click-footer.svg";
import humo from "../assets/humo-footer.svg";
import { LiaTelegram } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";

export default function Halal() {
  return (
    <>
    <div className='halal'>
        <img src={halal} alt="" />
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
