import Button from "@/components/Button";
import InputField from "@/components/InputField";
import React from "react";

const SearchGroup = () => {
  return (
    <div className="rounded-md p-2 divide-x-2  bg-white flex md:flex-row flex-col gap-2 w-full md:w-fit text-xs  ">
      <InputField
        icon="mdi:magnify"
        type="text"
        iconClass={"text-primary"}
        className="pl-1 py-1 outline-none"
        placeholder="Nama pekerjaan, etc"
      />
      <div className="md:flex hidden items-center">
      <InputField
        icon="mingcute:location-line"
        type="text"
        iconClass={"text-primary"}
        className="pl-1   py-1 outline-none"
        placeholder="Lokasi Anda"
        />
        </div>
      <Button variant="primary" width="w-full md:w-fit">Ayo cari!</Button>
    </div>
  );
};

export default SearchGroup;
