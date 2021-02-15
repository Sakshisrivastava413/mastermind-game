import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-500 py-5 px-12">
      <div className="flex items-center text-white mr-6">
        <span className="font-semibold text-xl">mastermind</span>
      </div>
      <div>
        <a className="text-sm px-4 py-2 border rounded text-white border-white hover:border-transparent cursor-pointer hover:text-gray-700 hover:bg-gray-200 mt-4 lg:mt-0">
          New Game
        </a>
      </div>
    </nav>
  );
};

export default Header;
