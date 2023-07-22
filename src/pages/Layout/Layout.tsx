import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex h-screen flex-col overflow-auto px-10">
      <Outlet />
    </div>
  );
};

export default Layout;
