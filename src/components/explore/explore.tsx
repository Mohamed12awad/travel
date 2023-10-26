import { Typography } from "@material-tailwind/react";
import travelImg from "../../assets/imgs/3--.png";

export default function Explore() {
  const expIcons = ["flight", "hotel", "wifi", "restaurant"];
  return (
    <section className="explore container mx-auto flex flex-col-reverse md:flex-row mt-36 w-full max-w-7xl px-8">
      <div className="md:flex-1 flex justify-center ">
        <img src={travelImg} alt="" />
      </div>
      <div className="explore-text md:flex-1 px-3 md:px-0">
        <Typography
          as="h3"
          className="text-2xl md:text-4xl capitalize font-bold"
        >
          Explore all corners of The world with us
        </Typography>
        <Typography
          as="p"
          variant="paragraph"
          className="capitalize mt-5 md:mt-8"
        >
          Travel fatal to prejudice, and narrow mindedness, And many Ot our
          people need it sorely on these accounts. And many Of out people need
          it sorely.
        </Typography>
        <div className="exp-icons grid grid-cols-2 grid-rows-2 gap-3">
          {/* map the icons */}
          {expIcons.map((i) => (
            <div
              key={i}
              className="flex justify-start items-center mt-3 gap-4 md:gap-8"
            >
              <div className="shadow p-2 rounded">
                <span className="material-icons md-36 text-[#4656b3]">{i}</span>
              </div>
              <Typography
                as="span"
                className="text-base md:text-lg capitalize font-bold"
              >
                {i}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
