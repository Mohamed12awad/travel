import { Typography } from "@material-tailwind/react";
import PlacesCard from "./../shared/card";

export default function Popular() {
  const navElementStyle =
    "p-1 font-normal border-b-2 border-b-transparent hover:border-b-[#4656b3] pb-2";

  return (
    <section className="container mx-auto popular mt-36 w-full max-w-7xl px-8">
      <div className="popular-text flex flex-col md:flex-row justify-between items-center">
        <Typography
          className="md:text-4xl text-2xl font-bold"
          color="black"
          as="p"
        >
          Popular Places
        </Typography>
        <div className="places text-sm mt-5">
          <a href="/" className={`mx-3 text-xl` + navElementStyle}>
            Beach
          </a>
          <a href="/" className={`mx-3 text-xl` + navElementStyle}>
            Safari
          </a>
          <a href="/" className={`mx-3 text-xl` + navElementStyle}>
            Beach
          </a>
          <a href="/" className={`mx-3 text-xl` + navElementStyle}>
            View All
          </a>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-evenly gap-8 my-9">
        <PlacesCard
          prefered
          img={
            "https://media.cnn.com/api/v1/images/stellar/prod/200611101955-01-egypt-dahab.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_618"
          }
        />
        <PlacesCard img="https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/49581/file-manager/luxor_temple.jpg" />
        <PlacesCard img="https://www.aviontourism.com/images/1920-900-fix/32fc5d0e-2157-4449-ab0a-b682c19b3c04" />
      </div>
    </section>
  );
}
