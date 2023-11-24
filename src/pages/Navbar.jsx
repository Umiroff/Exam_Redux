import { GrCertificate } from "react-icons/gr";
import logo from '../assets/logo.webp';
import { useSelector } from "react-redux";
import '../pages/Navbar.css';
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {

    const {amount} = useSelector((state) => state.cart)

  return (
    <>
        <nav>
          <Link to='/'>
          <img src={logo} alt="" className="logo" />
          </Link>
          <select name="city" id="" className="city">
            <option value="Tashkent">Tashkent</option>
            <option value="Samarqand">Samarqand</option>
          </select>
          <select name="lang" id="" className="lang">
            <option value="uzbek">uz</option>
            <option value="russian">rus</option>
          </select>
          <Link to='halal'>
          <GrCertificate className="halal_icon"/>
          </Link>
          <Link to='/register'>
          <button className="signup_btn" >Sign up</button>
          </Link>
        </nav>
        <Outlet />
    </>    
  )
}
