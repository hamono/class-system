import { Layout, Menu, Typography, Dropdown, Modal } from "antd";
import styles from "./index.less";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useCallback, useMemo, useState } from "react";
import { StudentModel, updateLogin, UserModel } from "@/features/userSlice";
import { useAppDispatch } from "@/store";
import UserModal from "./UserModal";

const { Title } = Typography;

export default function UserInfo({ user }: { user: UserModel }) {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = useCallback(() => {
    dispatch(updateLogin(false));
  }, []);
  const items = useMemo(() => {
    return [
      {
        key: "info",
        label: (
          <a className={styles.menuItem} onClick={() => setIsOpen(true)}>
            <UserOutlined />
            个人信息
          </a>
        ),
      },
      {
        key: "logout",
        label: (
          <a className={styles.menuItem} onClick={handleLogout}>
            <LogoutOutlined />
            退出登录
          </a>
        ),
      },
    ];
  }, []);
  return (
    <>
      <Modal
        title="用户信息"
        open={isOpen}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
        width={700}
      >
        <UserModal user={user as StudentModel} />
      </Modal>
      <Dropdown menu={{ items }} placement="bottom">
        <div className={styles.user}>
          <img src={user.coverUrl} className={styles.cover} />
          <Title
            level={5}
            style={{
              color: "#fff",
              margin: "0",
            }}
          >
            eeee张鹏鹏
          </Title>
        </div>
      </Dropdown>
    </>
  );
}
