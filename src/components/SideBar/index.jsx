import './style.scss';

function SideBar() {
  return (
    <>
      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <i className="material-icons large">important_devices</i>
            <span className="name">Hi there, if u like this, come checkout my social medias, click on about button down thewre and checkout and be happy</span>
          </div>

          <div className="divider"></div>
          
          <a href="/about" className="white-text"><i className="material-icons white-text">cloud</i>About Afonso Dev</a>
        </li>
        
        <li>
          <div className="dev-copy center">Afonso &copy;</div>
        </li>
      </ul>
    </>
  );
}

export default SideBar;