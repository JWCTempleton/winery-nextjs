import axios from "axios";

export default function OurWines(props) {
  console.log(props.wines);

  return (
    <div className="container">
      <div className="wine-section">
        <h1 className="ourWines">Our Wines</h1>
        <div className="wine-list">
          <div className="cabSav">
            {props.wines
              .filter((wine) => wine.attributes.type === "Cabernet Sauvignon")
              .map((wine) => {
                return (
                  <div className="wine-card" key={wine.id}>
                    <h2>{wine.attributes.type}</h2>
                    <p>
                      {wine.attributes.name} -{" "}
                      {wine.attributes.price ? `$${wine.attributes.price}` : ""}
                    </p>
                    <p>{wine.attributes.description}</p>
                  </div>
                );
              })}
          </div>
          <div className="chard">
            {props.wines
              .filter((wine) => wine.attributes.type === "Chardonnay")
              .map((wine) => {
                return (
                  <div className="wine-card" key={wine.id}>
                    <h2>{wine.attributes.type}</h2>
                    <p>
                      {wine.attributes.name} -{" "}
                      {wine.attributes.price ? `$${wine.attributes.price}` : ""}
                    </p>
                    <p>{wine.attributes.description}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const winesRes = await axios.get("http://localhost:1337/api/wines");
  // console.log(winesRes);
  return {
    props: {
      wines: winesRes.data.data,
    },
  };
}
