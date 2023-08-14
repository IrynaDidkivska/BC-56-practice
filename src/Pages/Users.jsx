import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { fetchUsers, fetchUsersByName } from 'services/api';

export const Users = () => {
  const [users, setUsers] = useState([]);

  const [queryStr, setQuery] = useState('');
  const location = useLocation();
  console.log(location);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  useEffect(() => {
    if (query) {
      fetchUsersByName(query).then(res => setUsers(res.users));
    } else {
      fetchUsers().then(res => setUsers(res.users));
    }
  }, [query]);

  const handleSearch = () => {
    setSearchParams(queryStr ? { query: queryStr } : {});
  };

  return (
    <div>
      <input value={queryStr} onChange={e => setQuery(e.target.value)} />
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
