import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Dropdown, Avatar } from "antd";

import {
  DashboardOutlined,
  UserOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

const data = [
  {
    name: "Profile",
    url: "/",
  },
  {
    name: "Dashboard",
    url: "/dashboard",
  },
];

const profileMenu = (
  <Menu style={{ marginTop: "2rem", fontSize: "5rem" }} className="test">
    {data.map((d, i) => (
      <Menu.Item key={i}>
        <a href={d.url}>{d.name}</a>
      </Menu.Item>
    ))}
  </Menu>
);

const HeaderMenu = () => {
  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item key="2">
        <NavLink to="/about">
          About &nbsp; <DashboardOutlined />
        </NavLink>
      </Menu.Item>
      <Menu.Item key="3" style={{ marginRight: "20px" }}>
        <NavLink to="/dashboard">
          Dashboard &nbsp;
          <DashboardOutlined />
        </NavLink>
      </Menu.Item>
      <Dropdown
        overlay={profileMenu}
        trigger={["click"]}
        placement="bottomCenter"
      >
        <NavLink to="/">
          <Avatar size={35} icon={<UserOutlined />} />
          &nbsp; <CaretDownOutlined />
        </NavLink>
      </Dropdown>
    </Menu>
  );
};

export default HeaderMenu;
