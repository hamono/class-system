import { Layout, Menu, Typography, Dropdown } from "antd";
import styles from "./NavHeader.less";
import logo from "../assets/logo.svg";
import FlexContainer from "@/components/FlexContainer";
import { useAppDispatch, useAppSelector } from "@/store";
import UserInfo from "@/components/UserInfo";
import { useNavigate } from "umi";
import { updateCurrentCourse } from "@/features/courseSlice";

const { Title } = Typography;
const { Header } = Layout;

export default function NavHeader() {
  const { isLogin, user } = useAppSelector((state) => ({
    isLogin: state.userSlice.login,
    user: state.userSlice.user,
  }));
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Header className={styles.root}>
      <FlexContainer align="center" gap={4}>
        <img
          src={logo}
          className={styles.logo}
          onClick={() => {
            navigate("/");
            dispatch(updateCurrentCourse(undefined));
          }}
        />
        <Title level={4} style={{ color: "#fff", margin: "0" }}>
          Web辅助教学系统
        </Title>
      </FlexContainer>
      {isLogin && <UserInfo user={user} />}
    </Header>
  );
}
