import "../Styles/Contact.css";

const Contact = () => {
  return (
    <>
      <section>
        <div className="box">
          <div className="container">
            <h1>Contact</h1>
          </div>
        </div>
      </section>
      <section id="form-section">
        <div className="contact container">
          <div>
            <h2>Get in Touch</h2>
            <form>
              <div className="name-email">
                <input type="text" name="name" id="name" placeholder="Name*" />
                <input type="email" name="email" id="e-mail" placeholder="Email*"/>
              </div>
              <input type="text" name="subject" id="subject" placeholder="Subject"/>
              <textarea name="message" id="message" placeholder="Message"></textarea>
              <button className="contact-btn">Send Message</button>
            </form>
          </div>
          <div>
            <h2>Contact Info</h2>
            <p className="contact-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting<br/>
              industry. Lorem Ipsum has been the industry's standard dummy text<br/>
              ever since the 1500s
            </p>
            <div className="icon-para">
              <p>
                <i className="fa-regular fa-map"></i> 1660 Travis Street
                <br />
                Miramar, FL 33025
              </p>
              <p>
                <i className="fa-solid fa-mobile-screen-button"></i> Phone :
                +772-607-0042
                <br />
                Fax : +772-607-0042
              </p>
              <p>
                <i className="fa-regular fa-envelope"></i>
                RachelSOntiveros@rhyta.com
                <br />
                RachelSOntiveros@rhyta.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="map">
        <div className="responsive-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
