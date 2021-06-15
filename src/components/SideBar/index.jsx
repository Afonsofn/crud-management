import './style.scss';

function SideBar() {
  return (
    <>
      <ul id="slide-out" class="sidenav">
        <li>
          <div class="user-view">
            <i class="material-icons large">important_devices</i>
            <span class="name">Hi there, if u like this, come checkout my social medias, click on about button down thewre and checkout and be happy</span>
          </div>
          <li><div class="divider"></div></li>
          <li><a href="#!" className="white-text"><i class="material-icons white-text">cloud</i>About Afonso Dev</a></li>
        </li>
        <div className="dev-copy">Afonso &copy;</div>
      </ul>
    </>
  );
}

export default SideBar;