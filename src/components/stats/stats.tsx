import { Typography } from "@material-tailwind/react";

export default function Stats() {
  return (
    <section className="container mx-auto grid grid-cols-12 gap-3 mt-24 justify-between ">
      <div className="md:flex-1 flex col-span-6 md:col-span-3">
        <div className="border border-gray-300 shadow rounded-lg  p-9 md:p-16 mx-auto">
          <Typography as="p" className="text-[#4656b3] text-3xl font-bold">
            24+
          </Typography>
          <Typography
            as="span"
            className=" text-xl text-center font-bold mt-3 capitalize"
          >
            cities
          </Typography>
        </div>
      </div>
      <div className="md:flex-1 flex col-span-6 md:col-span-3">
        <div className="border border-gray-300 shadow rounded-lg p-8 md:p-16 mx-auto">
          <Typography as="p" className="text-[#4656b3] text-3xl font-bold">
            700+
          </Typography>
          <Typography
            as="span"
            className=" text-xl text-center font-bold mt-3 capitalize"
          >
            place
          </Typography>
        </div>
      </div>
      <div className="md:flex-1 flex col-span-6 md:col-span-3">
        <div className="border border-gray-300 shadow rounded-lg  p-8 md:p-16 mx-auto">
          <Typography as="p" className="text-[#4656b3] text-3xl font-bold">
            200+
          </Typography>
          <Typography
            as="span"
            className=" text-xl text-center font-bold mt-3 capitalize"
          >
            hotels
          </Typography>
        </div>
      </div>
      <div className="md:flex-1 flex col-span-6 md:col-span-3">
        <div className="border border-gray-300 shadow rounded-lg  p-8 md:p-16 mx-auto">
          <Typography as="p" className="text-[#4656b3] text-3xl font-bold">
            2k+
          </Typography>
          <Typography
            as="span"
            className="text-xl text-center font-bold mt-3 capitalize"
          >
            review
          </Typography>
        </div>
      </div>
    </section>
  );
}
