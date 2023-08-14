import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

export const User = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const location = useLocation();
  console.log(location);

  const goBackLink = useRef(location.state?.from || '/users');
  console.log(goBackLink);
  // https://dummyjson.com/users/1
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then(res => setUser(res.data));
  }, [id]);
  return (
    <div>
      {/* <button type='button' goToLink={} >GO Back</button> */}
      {/* <Link to={null  }>Go Back</Link> */}
      <Link to={goBackLink.current}>Go Back REF</Link>
      <br />
      <Link to={location.state?.from || '/users'}>Go Back</Link>

      <h1> {user.firstName}</h1>
      <hr />
      <Link to="bio">Users Bio</Link>
      <hr />

      <Outlet />
    </div>
  );
};
