import { useCallback, useState } from "react";
import { Form, Input, Radio, Modal, Button } from "antd";
import FlexContainer from "../FlexContainer";
import { StudentModel, updateUser } from "@/features/userSlice";
import { avatarList } from "@/constants/avatar";

export default function UserInfoModal({
  onFinish,
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  onFinish: (user: StudentModel) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleFinish = useCallback((user: StudentModel) => {
    onFinish && onFinish({ ...user, coverUrl: avatarList[0].url });
    setIsOpen(false);
  }, []);
  return (
    <Modal
      title="用户信息"
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      width={600}
      footer={null}
    >
      <FlexContainer
        direction="column"
        align="flex-start"
        style={{ marginLeft: 60 }}
      >
        <Form
          name="user"
          style={{ width: 400 }}
          layout="horizontal"
          onFinish={handleFinish}
        >
          <Form.Item name="name" label="姓名">
            <Input />
          </Form.Item>
          <Form.Item name="gender" label="性别">
            <Radio.Group>
              <Radio value="男"> 男 </Radio>
              <Radio value="女"> 女 </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="number" label="学号">
            <Input />
          </Form.Item>
          <Form.Item name="college" label="专业">
            <Input />
          </Form.Item>
          <Form.Item name="classes" label="班级">
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 20, span: 4 }}>
            <Button style={{ width: "100%" }} type="primary" htmlType="submit">
              添加
            </Button>
          </Form.Item>
        </Form>
      </FlexContainer>
    </Modal>
  );
}
