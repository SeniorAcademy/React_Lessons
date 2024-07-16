// import React from "react";

// const Cards = (props) => {
//   return (
//     <div className="bg-gray-800 text-gray-300 rounded-t-2xl" key={props.index}>
//       <img
//         className="h-[200px] w-full object-cover rounded-t-2xl"
//         src={props.img}
//         alt={props.name}
//       />
//       <div className="p-8 flex justify-center items-center flex-col  ">
//         <h2 className="text-2xl text-sky-200 mb-3">Title: {props.name}</h2>
//         <p className="text-xl text-green-300">Price: {props.price}</p>
//       </div>
//     </div>
//   );
// };

// export default Cards;

import React from "react";

const Cards = ({ name, price, img , index}) => {

  return (
    <div className="bg-gray-800 text-gray-300 rounded-t-2xl" key={index}>
      <img
        className="h-[200px] w-full object-cover rounded-t-2xl"
        src={img}
        alt={name}
      />
      <div className="p-8 flex justify-center items-center flex-col  " >
        <h2 className="text-2xl text-sky-200 mb-3">Title: {name}</h2>
        <p className="text-xl text-green-300">Price: {price}</p>
      </div>
    </div>
  );
};

export default Cards;

// import React from "react";

// const Cards = (props) => {
//   const { name, price, img , index} = props;
//   return (
//     <div className="bg-gray-800 text-gray-300 rounded-t-2xl" key={index}>
//       <img
//         className="h-[200px] w-full object-cover rounded-t-2xl"
//         src={img}
//         alt={name}
//       />
//       <div className="p-8 flex justify-center items-center flex-col  ">
//         <h2 className="text-2xl text-sky-200 mb-3">Title: {name}</h2>
//         <p className="text-xl text-green-300">Price: {price}</p>
//       </div>
//     </div>
//   );
// };

// export default Cards;
