import axios from "axios";

export default function OurWines(props) {
  console.log(props.wines);

  return (
    <div className="container">
      <h1 className="ourWines">Our Wines</h1>
      <div className="wine-list">
        {props.wines.map((wine) => {
          return (
            <div className="wine-card" key={wine.id}>
              <p>{wine.attributes.type}</p>
              <p>{wine.attributes.name}</p>
              <p>{wine.attributes.description}</p>
            </div>
          );
        })}
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
