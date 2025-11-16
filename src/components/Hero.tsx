import { TextGenerateEffect } from "./text-generate-effect";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import Input from "@mui/material/Input";
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function setCheckInDate(_value: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="absolute flex flex-col gap-[100px] top-1/2 left-1/2 -translate-1/2 md:left-0 md:translate-x-0 w-full max-w-[1470px] z-10">
      {/* Title */}
      <div className="ml-4 md:ml-5 lg:ml-8 xl:ml-[182px]">
        <h1 className="text-white text-[40px] md:text-[54px] lg:text-[64px] xl:text-[84px]">
          Start your unforgettable <br /> journey with us.
        </h1>
        <TextGenerateEffect
          words={"The best travel for your jouney begins now"}
        />
      </div>
      {/* Input */}
      <div className="px-4 md:p-0 mt- w-full max-w-[1470px]">
        <div className="bg-white w-full rounded-2xl md:rounded-l-none">
          <form className="pl-5  flex flex-col justify-between md:flex-row items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
              {/* Destination Input */}
              <label>
                <TextField
                  id="standard-basic"
                  label="DESTINATION"
                  variant="standard"
                  className="w-full rubik"
                />
              </label>
              {/* Person Input */}
              <FormControl
                variant="standard"
                className="w-full my-auto"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  PERSON
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  label="Person"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
              {/* CheckIn Input */}
              <FormControl
                variant="standard"
                className="w-full"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel shrink htmlFor="check-in">
                  CHECK IN
                </InputLabel>
                <Input
                  id="check-in"
                  type="date"
                  value={setCheckInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </FormControl>
              {/* CheckOut Input */}
              <FormControl
                variant="standard"
                className="w-full"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel shrink htmlFor="check-in">
                  CHECK OUT
                </InputLabel>
                <Input
                  id="check-in"
                  type="date"
                  value={setCheckInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </FormControl>
            </div>
            {/* Submit */}
            <button
              onClick={() => alert("Done")}
              type="reset"
              className="w-full md:w-fit bg-primary rounded-b-2xl md:rounded-r-2xl! md:rounded-b-none px-5 py-10 text-4xl text-white flex items-center justify-between gap-3 cursor-pointer hover:opacity-80"
            >
              <div className="flex flew-row md:flex-col">
                <span>Book</span> <span>Now</span>
              </div>
              <FaArrowRightLong />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
