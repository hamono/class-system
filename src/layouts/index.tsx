import { Link, Outlet, useNavigate } from "umi";
import "./index.less";
import { Layout, Menu } from "antd";
import NavHeader from "./Header";
import Foot from "./Footer";
import styles from "./index.less";
import { useAppSelector } from "@/store";
import { useEffect } from "react";
import UserApi from "@/api/user";

const { Content } = Layout;

export default function index() {
  const currentCourse = useAppSelector(
    (state) => state.courseSlice.currentCourse
  );

  return (
    <Layout>
      <NavHeader />
      <Content className={`${currentCourse ? "" : styles.content}`}>
        <Outlet />
      </Content>
      {!currentCourse && <Foot />}
    </Layout>
  );
}
