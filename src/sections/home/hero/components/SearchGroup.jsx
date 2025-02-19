import Button from "@/components/Button";
import InputField from "@/components/InputField";
import React from "react";

const SearchGroup = () => {
  return (
    <div className="rounded-md p-2 divide-x-2  bg-white flex w-fit text-sm  ">
      <InputField
        icon="mdi:magnify"
        type="text"
        iconClass={"text-[#0A65CC]"}
        className="pl-2 py-1 outline-none"
        placeholder="Nama pekerjaan, etc"
      />
      <InputField
        icon="mingcute:location-line"
        type="text"
        iconClass={"text-[#0A65CC]"}
        className="pl-2 py-1 outline-none"
        placeholder="Lokasi Anda"
      />
      <Button>Ayo cari!</Button>
    </div>
  );
};

export default SearchGroup;
