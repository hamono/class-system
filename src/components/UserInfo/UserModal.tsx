import React, { useCallback, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from "antd";
import FlexContainer from "../FlexContainer";
import { StudentModel, updateUser } from "@/features/userSlice";
import AvatarSelector from "../AvatarSelector";
import { useAppDispatch } from "@/store";
import { avatarList } from "@/constants/avatar";

export default function UserModal({ user }: { user: StudentModel }) {
  const dispatch = useAppDispatch();
  const [selectAvatar, setSelector] = useState(false);

  const handleChange = useCallback((value: string) => {
    const url = avatarList.find((avatar) => avatar.key === value)?.url || "";
    dispatch(updateUser({ ...user, coverUrl: url }));
  }, []);
  return (
    <FlexContainer
      direction="column"
      align="flex-start"
      style={{ marginLeft: 60 }}
    >
      <AvatarSelector
        value={user.coverUrl}
        open={selectAvatar}
        onChange={handleChange}
        setOpen={setSelector}
      />
      <Form.Item label="头像" valuePropName="fileList">
        <FlexContainer align="flex-end">
          <img src={user.coverUrl} alt="" style={{ width: 50 }} />
          <Button
            onClick={() => setSelector(true)}
            size="small"
            style={{ marginLeft: 20 }}
          >
            修改
          </Button>
        </FlexContainer>
      </Form.Item>
      <Form style={{ width: 400 }} layout="horizontal" disabled={true}>
        <Form.Item label="姓名">
          <Input />
        </Form.Item>
        <Form.Item label="性别">
          <Radio.Group>
            <Radio value="男"> 男 </Radio>
            <Radio value="女"> 女 </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="学号">
          <Input />
        </Form.Item>
        <Form.Item label="专业">
          <Input />
        </Form.Item>
        <Form.Item label="班级">
          <Input />
        </Form.Item>
      </Form>
    </FlexContainer>
  );
}
