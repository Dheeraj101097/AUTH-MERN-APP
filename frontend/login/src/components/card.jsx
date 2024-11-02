import React from "react";

const card = (props) => {
  return (
    // <div>
    //   <h1>name: {props.name}</h1>
    //   <h3>age {props.age}</h3>
    //   <h2>profession: {props.profession}</h2>

    //   <img src={props.photo} />
    // </div>
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs mx-auto">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src={props.photo}
        alt="Profile Picture"
      />
      <div className="text-center mt-4">
        <h1 className="text-xl font-semibold text-gray-800">
          Name: {props.name}
        </h1>
        <h3 className="text-gray-600 text-md mt-2">Age: {props.age}</h3>
        <h2 className="text-gray-700 text-lg mt-1">
          Profession: {props.profession}
        </h2>
      </div>
    </div>
  );
};

export default card;
