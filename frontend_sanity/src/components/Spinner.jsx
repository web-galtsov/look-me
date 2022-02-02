import React from 'react';
import  {Rings} from 'react-loader-spinner';

function Spinner({ message }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Rings
          type="BallTriangle"
          color="#00BFFF"
          height={80}
          width={80}
          className="m-5"
      />
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
}

export default Spinner;
