import { Layout, Menu, MenuProps } from "antd";
import NavHeader from "./Header";
import Foot from "./Footer";
import { Outlet, useNavigate } from "umi";
import React, { useCallback, useState } from "react";
import styles from "./index.less";
import { useAppSelector } from "@/store";
import { UserType } from "@/type";
import { STUDENT_MENU, TEACHER_MENU } from "@/constants/menu";

const { Sider, Content } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

export default function SideBar({ children }: { children: React.ReactNode }) {
  const { type } = useAppSelector((state) => state.userSlice.user);

  const navigate = useNavigate();

  const handleNav = useCallback((item: MenuItem) => {
    navigate(`${item?.key}`);
    console.log(item)
  }, []);

  return (
    <Layout>
      <Sider
        width={200}
        className="site-layout-background"
        theme="light"
        collapsible
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={[TEACHER_MENU[0].key]}
          style={{ height: "calc(100vh - 60px - 48px)", borderRight: 0 }}
          onSelect={handleNav}
          items={type === UserType.TEACHER ? TEACHER_MENU : STUDENT_MENU}
        />
      </Sider>
      <Content>
        <div className={styles.content}>{children}</div>
        <Foot />
      </Content>
    </Layout>
  );
}
