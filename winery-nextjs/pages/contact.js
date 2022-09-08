export default function Contact() {
  return (
    <div className="container">
      <div className="contact-title">
        <h1 className="contact-title--main">Olney Family Vineyard</h1>
        <h2 className="contact-title--sub">Winery and Cave</h2>
      </div>
      <div className="contact-section">
        <div className="contact-section--info">
          <h2>CONTACT US and</h2>
          <h2>WINE SALES</h2>
          <p>Olney Family Vineyards</p>
          <p>2253 Dry Creek Road</p>
          <p>Napa, California 94558</p>
          <p>707-999-1795</p>
          <p>wine@ofv.com</p>
        </div>
        <div className="contact-section--form">
          <form>
            <input type="text" id="name" name="name" placeholder="Name" />
            <input type="text" id="email" name="email" placeholder="Email" />
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
            />
            <input type="text" id="phone" name="phone" placeholder="Phone" />
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Message"
            />
          </form>
          <button>Send</button>
        </div>
      </div>
      <div c>
        <iframe
          className="contact-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.8005108766374!2d-122.34169504989998!3d38.330450187668866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808500b48515a553%3A0x7994e7355c56ee7e!2sOlney%20Family%20Vineyard%2C%20Cave%20and%20Winery!5e0!3m2!1sen!2sus!4v1662678840642!5m2!1sen!2sus"
          width="800"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
