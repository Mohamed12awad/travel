import { Typography } from "@material-tailwind/react";
import SearchBar from "./search";

const myHeader = [
  "https://image.cnbcfm.com/api/v1/image/107178919-1673854215895-gettyimages-669463000-shutterstock_621020393.jpeg",
  "https://www.quitandgotravel.com/wp-content/uploads/sites/8/2022/04/Siwa-Shali-Fortress-Mountain-View.jpg",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/f6/58/4b/anasteisha.jpg?w=1200&h=-1&s=1",
  "https://cdnp.flypgs.com/files/Sehirler-long-tail/Hurghada/hurghada-cami-sahil.jpg",
];

function Header() {
  return (
    <header className="mt-5 w-full max-w-7xl px-8">
      <div className="flex mx-auto flex-wrap justify-between relative">
        <div className="head-text w-full relative md:py-12 md:w-1/2">
          <h1 className="text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-bold pt-16 tracking-wider">
            Explore <br /> Beautiful <span className="text-5xl">&#10024;</span>
            <br /> World!
          </h1>
          <Typography as="p" variant="lead" className="text-lg pe-5 mt-3">
            Visit and go to the most Beautiful places in the world
          </Typography>
          <div className="w-full">
            <SearchBar />
          </div>
        </div>
        <div className="head-img mt-5 md:mt-0 ms-auto md:ps-5 grid grid-cols-2 grid-rows-1 gap-3 md:w-1/2">
          <div className="h-[90%] flex flex-col gap-2 mt-auto">
            <div className="flex overflow-hidden h-[250px] rounded-sm">
              <img
                src={myHeader[0]}
                alt="home"
                className="object-fill w-full"
              />
            </div>
            <div className="flex overflow-hidden h-[250px] rounded-sm">
              <img
                src={myHeader[1]}
                alt="home"
                className="object-fill w-full"
              />
            </div>
          </div>
          <div className="h-[90%] flex flex-col gap-2 mb-auto">
            <div className="flex overflow-hidden h-[250px] rounded-sm">
              <img
                src={myHeader[2]}
                alt="home"
                className="object-fill w-full"
              />
            </div>
            <div className="flex overflow-hidden h-[250px] rounded-sm">
              <img
                src={myHeader[3]}
                alt="home"
                className="object-fill w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
