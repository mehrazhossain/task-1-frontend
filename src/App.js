import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Products from './Pages/Dashboard/Products';
import UpdateProduct from './Pages/Dashboard/UpdateProduct';
import UpdateUserRole from './Pages/Dashboard/UpdateUserRole';
import Users from './Pages/Dashboard/Users';
import Welcome from './Pages/Dashboard/Welcome';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Welcome />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/users" element={<Users />} />
          <Route
            path="/dashboard/product/:id"
            element={<UpdateProduct />}
          ></Route>
          <Route
            path="/dashboard/user/role/:id"
            element={<UpdateUserRole />}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
