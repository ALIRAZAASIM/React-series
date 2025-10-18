import React from "react";

function Header(props) {
  return (
    <>
      <div className=" text-2xl flex justify-between bg-blue-500 text-white font-bold px-3.5 py-5">
        <h1 className="cursor-pointer">
          {props.name} {props.editor}
        </h1>
        <div className="flex gap-10 ml-20 cursor-pointer items-center justify-end ">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Section</h1>
          <h1>Feature</h1>
        </div>
      </div>
    </>
  );
}

export default Header;
