import { useState } from 'react';
import jwt_decode from 'jwt-decode';

const useAuthUser = () => {
  const [AuthUser, setAuthUser] = useState('');

  const decoded = jwt_decode(token);
  localStorage.setItem('currentUser', JSON.stringify(decoded));
  setAuthUser(decoded);
  return AuthUser;
};

export default useAuthUser;
