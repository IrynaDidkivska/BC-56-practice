import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

export const Users = () => {
  const [users, setUsers] = useState([]);

  const [query, setQuery] = useState('');
  const location = useLocation();
  console.log(location);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    axios
      .get('https://dummyjson.com/users')
      .then(res => setUsers(res.data.users));
  }, []);

  const handleSearch = () => {
    setSearchParams(query ? { query } : {});
  };

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      {users.map(user => (
        // <Link to={`${user.id}`} key={user.id}>
        <Link to={user.id.toString()} state={{ from: location }} key={user.id}>
          <h1>
            {user.firstName} {user.lastName}
          </h1>
        </Link>
      ))}
    </div>
  );
};
