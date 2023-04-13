import SideBar from "./Sidebar";
import { Link, Outlet } from "umi";

export default function WithSideBar() {
  return (
    <SideBar>
      <Outlet />
    </SideBar>
  );
}
