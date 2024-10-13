import { useEffect } from 'react';
import { fetchUsers } from './userSlice';
// import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../app/hooks';


export default function UserView() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (<div>
    <h2>List of Users</h2>
    {user.loading && <p>Loading....</p>}
    {!user.loading && user.error && <p>{user.error}</p>}
    {!user.loading && user.users.length > 0 && (
      <ul>
        {
          user.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
    )}

  </div>)
};