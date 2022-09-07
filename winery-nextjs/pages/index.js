import Home from "../components/Home";
import axios from "axios";

export default function App() {
  return (
    <div>
      <Home />
    </div>
  );
}
// export async function getStaticProps() {
//   const winesRes = await axios.get("http://localhost:1337/api/wines");
//   // console.log(winesRes);
//   return {
//     props: {
//       wines: winesRes.data.data,
//     },
//   };
// }
