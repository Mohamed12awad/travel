import { Typography } from "@material-tailwind/react";
import GalleryImg from "./galleryImg";

export default function Gallery() {
  const myHeader = [
    "https://images.unsplash.com/photo-1618224237039-0f55d9f40c1c?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://www.quitandgotravel.com/wp-content/uploads/sites/8/2022/04/Siwa-Shali-Fortress-Mountain-View.jpg",
    "https://images.unsplash.com/photo-1520959534170-cfc6e1d7221c?auto=format&fit=crop&q=80&w=1406&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://cdnp.flypgs.com/files/Sehirler-long-tail/Hurghada/hurghada-cami-sahil.jpg",
    "https://images.unsplash.com/photo-1502640403806-cf2ac7a5d37a?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1584719866406-c76ddee48493?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <section className="gallery container mx-auto mt-16 w-full max-w-7xl px-8">
      <div className="popular-text flex flex-col md:flex-row md:justify-between md:items-center">
        <Typography
          className="md:text-4xl text-2xl font-bold flex items-end"
          color="black"
          as="h5"
        >
          Gallery
          <Typography
            as="span"
            variant="lead"
            color="gray"
            className="text-sm font-bold capitalize"
          >
            -Share your happy momments
          </Typography>
        </Typography>
        <div className="places mt-5 md:mt-0 ms-auto">
          <a href="/" className={`mx-3 text-xl`}>
            View All
          </a>
        </div>
      </div>
      <div className="gallery-imgs h-[400px] md:h-[600px] grid gap-5 grid-cols-3 grid-rows-3 mt-12">
        <GalleryImg src={myHeader[0]} desc="explore the temples of luxors" />
        <GalleryImg
          src={myHeader[1]}
          desc="explore the temples of luxors explore the temples of luxors explore the temples of luxors"
        />
        <GalleryImg src={myHeader[2]} desc="explore the temples of luxors" />
        <GalleryImg src={myHeader[3]} desc="explore the temples of luxors" />
        <GalleryImg src={myHeader[4]} desc="explore the temples of luxors" />
        <GalleryImg src={myHeader[5]} desc="explore the temples of luxors" />
      </div>
    </section>
  );
}
