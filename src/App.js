import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Products from './Pages/Dashboard/Products';
import Users from './Pages/Dashboard/Users';
import Login from './Pages/Login/Login';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/users" element={<Users />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
