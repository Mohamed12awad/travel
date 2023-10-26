import { Button, Input, Option, Select } from "@material-tailwind/react";
// import type { SelectProps } from "@material-tailwind/react";

import { useState } from "react";

function SearchBar() {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  // const openP = () => {
  //   const picker = document.querySelector(
  //     ".head-text .search input[type=date]"
  //   ) as HTMLInputElement;
  //   picker ? picker.showPicker() : "";
  // };
  // console.log(location);
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ location: location, date: date, price: price });
  };
  // const handleSelect = (e: any) => {
  //   setLocation(e);
  // };
  return (
    <form
      className="search-form hidden md:flex search px-12 py-6 mt-6 mx-6 shadow rounded-full"
      onSubmit={handleSearch}
    >
      <Select
        variant="standard"
        label="Location"
        className="min-w-0"
        onChange={(e: any) => setLocation(e)}
        value={location}
      >
        <Option value="siwa">Siwa</Option>
        <Option value="mat">mat</Option>
        <Option value="sharm">sharm</Option>
      </Select>

      <Input
        type="date"
        label="Date"
        color="blue-gray"
        crossOrigin=""
        variant="standard"
        className="px-3 min-w-0"
        shrink
        // onFocus={() => openP()}
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />

      <Select
        variant="standard"
        label="Price"
        className="min-w-0"
        value={price}
        onChange={(e: any) => setPrice(e)}
      >
        <Option value="1">Siwa</Option>
        <Option value="2">Siwa</Option>
        <Option value="3">Siwa</Option>
      </Select>
      <Button color="indigo" variant="gradient" className="" type="submit">
        Search
      </Button>
    </form>
  );
}

export default SearchBar;
