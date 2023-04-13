import UserApi from "@/api/user";
import FlexContainer from "@/components/FlexContainer";
import UserInfoModal from "@/components/UserInfoModal";
import { StudentModel, UserModel } from "@/features/userSlice";
import { Input, Button, Table } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import UserTable from "./components/UserTable";

const { Search } = Input;

export default function StudentManage() {
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [search, setSearch] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const curStudent = useMemo(() => {
    return students.filter(
      (stu) => stu.number.includes(search) || stu.name.includes(search)
    );
  }, [search, students]);

  const handleFinish = useCallback(async (user: UserModel) => {
    await UserApi.addUser(user);
    await getDatas()
  }, []);

  const getDatas = useCallback(async () => {
    const users = await UserApi.getUser() as any
    setStudents(users);
  }, [])

  const handleDelete = useCallback(async (userId: string) => {
    await UserApi.deleteUser({number: userId, courseId: "111111"})
    await getDatas()
  }, [])

  useEffect(() => {
    getDatas()
  }, [])

  return (
    <FlexContainer
      style={{ width: "100%", maxHeight: "100%" }}
      direction="column"
      gap={20}
    >
      <FlexContainer
        style={{ width: "100%" }}
        align="center"
        content="space-between"
      >
        <div style={{ width: 300 }}>
          <Search
            placeholder="输入学号或姓名搜索"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            enterButton
          />
        </div>

        <Button type="primary" onClick={() => setIsOpen(true)}>
          添加学生
        </Button>
      </FlexContainer>
      <UserTable data={curStudent} onDelete={handleDelete} />
      <UserInfoModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onFinish={handleFinish}
      />
    </FlexContainer>
  );
}
