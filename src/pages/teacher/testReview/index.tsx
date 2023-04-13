import FlexContainer from "@/components/FlexContainer";
import { StudentModel } from "@/features/userSlice";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Table, Typography } from "antd";
import { ColumnsType } from "antd/lib/table";
import { useLocation, useNavigate } from "umi";

const datas: StudentModel[] = [
  {
    name: "hamomo",
    number: "3180209036",
    college: "计算甲学院",
    class: "软件1902",
    coverUrl: "",
    gender: "男",
    type: "student",
    score: 89,
  },
  {
    name: "hamomo",
    number: "3180209036",
    college: "计算甲学院",
    class: "软件1902",
    coverUrl: "",
    gender: "男",
    type: "student",
    score: 87,
  },
];

export default function WorkDetail() {
  const navigate = useNavigate();
  const location = useLocation();

  const columns: ColumnsType<StudentModel> = [
    {
      key: "username",
      title: "姓名",
      dataIndex: "name",
    },
    {
      key: "number",
      title: "学号",
      dataIndex: "number",
      sorter: (a, b) => parseInt(a.number) - parseInt(b.number),
    },
    {
      key: "gender",
      title: "性别",
      dataIndex: "gender",
    },
    {
      key: "college",
      title: "学院",
      dataIndex: "college",
    },
    {
      key: "class",
      title: "班级",
      dataIndex: "class",
    },
    {
      key: "action",
      title: "操作",
      width: 200,
      render: (__, record) => {
        return (
          <Button size="small" type="primary" onClick={() => navigate("90")}>
            批阅
          </Button>
        );
      },
    },
  ];

  return (
    <FlexContainer style={{ width: "100%" }} direction="column">
      <FlexContainer style={{ width: "100%" }} align="center" gap={20}>
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() =>
            navigate(location.pathname.split("/").slice(0, -2).join("/"))
          }
        >
          返回
        </Button>
        <Typography.Title level={5} style={{ fontSize: 14, marginBottom: 0 }}>
          测试一
        </Typography.Title>
      </FlexContainer>
      <FlexContainer
        style={{ width: "100%", marginTop: 30, padding: "0 10px" }}
      >
        <Table
          columns={columns}
          dataSource={datas}
          style={{ width: "100%", maxHeight: "100%" }}
        />
      </FlexContainer>
    </FlexContainer>
  );
}
