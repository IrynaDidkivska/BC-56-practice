import React from 'react';
import { Link } from 'react-router-dom';
//https://blog.thomasnet.com/hubfs/shutterstock_774749455.jpg
export const NotFound = () => {
  return (
    <div>
      <img
        width={400}
        src="https://blog.thomasnet.com/hubfs/shutterstock_774749455.jpg"
        alt="empty"
      />
      <Link to="/">Go Home</Link>
    </div>
  );
};
