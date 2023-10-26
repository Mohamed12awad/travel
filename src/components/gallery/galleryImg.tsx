import { Typography, Button } from "@material-tailwind/react";

export default function GalleryImg(props: any) {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="absolute w-full h-full content-none bg-black bg-gradient-to-tr hover:opacity-75 opacity-0 flex flex-col justify-center items-center transition-all">
        <Typography
          as="p"
          color="white"
          className="text-xl md:text-3xl capitalize text-center p-3 line-clamp-1"
        >
          {props.desc}
        </Typography>
        <Button className="my-5" variant="gradient" color="white">
          <a href="/">Visit Now</a>
        </Button>
      </div>
      <img src={props.src} alt="22" className="h-full w-full " />
    </div>
  );
}
