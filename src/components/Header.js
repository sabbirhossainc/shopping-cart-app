import Link from '../utils/Link';
import logo from "../assets/images/logo.png"
import { useSelector } from 'react-redux';

const Header = () => {
  const carts  = useSelector((state) => state.carts);
  const numOfCart = carts.reduce((total, product) => total+product.quantity,0);
  return (
    <nav className="bg-[#171C2A] py-4">
    <div className="navBar">
      <Link href="/">
        <img src={logo} alt="LWS" className="max-w-[140px]" />
      </Link>

      <div className="flex gap-4">
        <Link href="/" className="navHome" id="lws-home"> Home </Link>
        <Link href="/cart" className="navCart" id="lws-cart">
          <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
          <span id="lws-totalCart">{numOfCart}</span>
        </Link>
      </div>
    </div>
  </nav>
  );
};

export default Header;
