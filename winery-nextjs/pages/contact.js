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
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />
          </form>
        </div>
      </div>
    </div>
  );
}
