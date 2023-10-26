import "./App.scss";
import Explore from "./components/explore/explore";
import { Footer } from "./components/footer/footer";
import Gallery from "./components/gallery/gallery";
import Header from "./components/header/header";
import NavBar from "./components/navbar/navbar";
import Popular from "./components/places/popular";
import Stats from "./components/stats/stats";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className="relative">
      <NavBar />
      <Header />
      <Popular />
      <Explore />
      <Stats />
      <Gallery />
      <Footer />
      {/* <p className="font-bold text-2xl text-cyan-400">hello</p>
      <p className="text-2xl capitalize">hello from vite</p> */}
    </main>
  );
}

export default App;
