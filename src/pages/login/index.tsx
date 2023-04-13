import FlexContainer from "@/components/FlexContainer";
import { Form, Input, Checkbox, Button, Typography } from "antd";
import { useCallback, useEffect } from "react";
import lottie from "lottie-web";
import lottiePath from "../../assets/login.json";
import { useNavigate } from "umi";
import { useAppDispatch } from "@/store";
import { updateLogin, updateUser, UserModel } from "@/features/userSlice";
import { avatarList } from "@/constants/avatar";
import UserApi from "@/api/user";

const { Title } = Typography;

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = useCallback(
    async (value: { username: string; password: string }) => {
      const data = (await UserApi.login(value)) as any;

      dispatch(updateLogin(true));
      dispatch(
        updateUser({
          ...data,
          username: data.name,
          coverUrl: avatarList[0].url,
        })
      );
      navigate("/", { replace: true });
    },
    []
  );

  useEffect((): any => {
    lottie.loadAnimation({
      container: document.getElementById("lottie-animation")!,
      renderer: "canvas",
      loop: true,
      animationData: lottiePath,
    });

    return () => lottie.destroy();
  }, []);
  return (
    <FlexContainer
      style={{ width: "100%", height: "100%" }}
      content="center"
      align="center"
    >
      <FlexContainer
        style={{ width: "50%", maxWidth: "700px", height: "100%" }}
        content="center"
        align="center"
      >
        <div
          id="lottie-animation"
          style={{ width: "500px", height: "500px" }}
        ></div>
      </FlexContainer>
      <FlexContainer
        style={{ width: "50%", height: "100%" }}
        content="center"
        align="center"
        direction="column"
      >
        <Title level={2}>登 录</Title>
        <Form
          name="basic"
          style={{ width: "60%", maxWidth: "400px" }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input placeholder={"用户名"} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password placeholder="密码" />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>记住密码</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button style={{ width: "100%" }} type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </FlexContainer>
    </FlexContainer>
  );
}
