import { Sidebar } from 'flowbite-react';
import React from 'react';

const SideNav = () => {
  return (
    <div className="w-fit">
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">Dashboard</Sidebar.Item>
            <Sidebar.Collapse label="Product Management">
              <Sidebar.Item href="#">Products</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Collapse label="User Management">
              <Sidebar.Item href="#">Users</Sidebar.Item>
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideNav;
