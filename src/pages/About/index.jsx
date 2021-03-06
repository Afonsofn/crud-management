import './style.scss';

function About() {
  return (
    <div className="about center">
      <img src="afonso-perfil.png" alt="" />

      <p>Hi there, Afonso here, take a look at my social medias by clicking on links below, thanks guys...</p>

      <div className="button-wrapper">
        <a className="waves-effect waves-light btn" href="https://www.instagram.com/raulafonsof/" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram-square"></i>
          <span className="hide-on-med-and-down">instagram</span>
        </a>

        <a className="waves-effect waves-light btn" href="https://github.com/Afonsofn" target="_blank" rel="noreferrer">
          <i className="fab fa-github-square"></i>
          <span className="hide-on-med-and-down">github</span>
        </a>
        
        <a className="waves-effect waves-light btn" href="https://www.linkedin.com/in/afonsofn/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
          <span className="hide-on-med-and-down">linkedin</span>
        </a>
      </div>
      
      <a className="teal-text" href="/" ><i className="material-icons">keyboard_arrow_left</i>Home</a>
    </div>
  );
}

export default About;