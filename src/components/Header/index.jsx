import './style.scss';
import SideBar from '../SideBar'
import { useEffect } from 'react';
import M from "materialize-css";

function Header() {
  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll('.sidenav'))
  }, [])

  return (
    <ul className="header">
      <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <img src="new-nutcache-logo.png" alt="" />
      <SideBar />
    </ul>
  );
}

export default Header;