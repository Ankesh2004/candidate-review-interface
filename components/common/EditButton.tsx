import React from "react";
import { MdEdit } from "react-icons/md";

const EditButton = () => {
  return (
    <button className="bg-foreground shadow-sm hover:shadow-xl p-[1rem] rounded-2xl">
      <MdEdit />
    </button>
  );
};

export default EditButton;
