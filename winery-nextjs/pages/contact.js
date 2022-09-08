export default function Contact() {
  return (
    <div className="container">
      <div className="contact-title">
        <h1 className="contact-title--main">Olney Family Vineyard</h1>
        <h2 className="contact-title--sub">Winery and Cave</h2>
      </div>
      <div className="contact-section">
        <div className="contact-section--info">Olney Family Vineyards</div>
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
