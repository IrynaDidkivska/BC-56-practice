import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Users = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://dummyjson.com/users')
      .then(res => setUsers(res.data.users));
  }, []);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate('/')}>Go Home</button>
      {users.map(user => (
        // <Link to={`${user.id}`} key={user.id}>
        <Link to={user.id.toString()} key={user.id}>
          <h1>
            {user.firstName} {user.lastName}
          </h1>
        </Link>
      ))}
    </div>
  );
};
// "id": 1,
//       "firstName": "Terry",
//       "lastName": "Medhurst",
//       "maidenName": "Smitham",
//       "age": 50,
//       "gender": "male",
//       "email": "atuny0@sohu.com",
//       "phone": "+63 791 675 8914",
//       "username": "atuny0",
//       "password": "9uQFF1Lh",
//       "birthDate": "2000-12-25",
//       "image": "https://robohash.org/hicveldicta.png?size=50x50&set=set1",
//       "bloodGroup": "A−",
//       "height": 189,
//       "weight": 75.4,
