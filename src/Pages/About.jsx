import CommenHeader from "../Components/CommenHeader";
import "../Styles/About.css";

function About() {
  return (
    <>
      <section>
        <div className="box">
          <div className="container">
            <h2>About Us</h2>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="about container">
          <div className="about-image ">
            <img src="/images/about.webp" alt="about"/>
          </div>
          <div>
            <h2>Who we are</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat enim ad minim veniam, quis
              nostrud exercita.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
