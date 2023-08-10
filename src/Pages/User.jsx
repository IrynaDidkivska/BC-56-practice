import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const User = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  // https://dummyjson.com/users/1
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then(res => setUser(res.data));
  }, [id]);
  return <div>{user.firstName}</div>;
};
