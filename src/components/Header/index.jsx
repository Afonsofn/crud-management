import { useEffect } from 'react';
import M from "materialize-css";
import SideBar from '../SideBar'

import './style.scss';

function Header() {

  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll('.sidenav'))
  }, [])

  return (
    <div className="header">
      <a href="#!" data-target="slide-out" className="sidenav-trigger">
        <span className="material-icons">menu</span>
      </a>
      <img src="new-nutcache-logo.png" alt="nutcache-logo" />
      <SideBar />
    </div>
  );
}

export default Header;