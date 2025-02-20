import Button from "@/components/Button";
import InputField from "@/components/InputField";
import React from "react";

const SearchGroup = () => {
  return (
    <div className="rounded-md p-2 divide-x-2  bg-white flex w-fit text-xs  ">
      <InputField
        icon="mdi:magnify"
        type="text"
        iconClass={"text-[#0A65CC]"}
        className="pl-1 py-1 outline-none"
        placeholder="Nama pekerjaan, etc"
      />
      <div className="md:block hidden">

      <InputField
        icon="mingcute:location-line"
        type="text"
        iconClass={"text-[#0A65CC]"}
        className="pl-1   py-1 outline-none"
        placeholder="Lokasi Anda"
        />
        </div>
      <Button>Ayo cari!</Button>
    </div>
  );
};

export default SearchGroup;
