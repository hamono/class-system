import {
  TeamOutlined,
  FundViewOutlined,
  ReadOutlined,
  FundProjectionScreenOutlined,
  MessageOutlined,
  SecurityScanOutlined,
  SolutionOutlined,
  OneToOneOutlined,
} from "@ant-design/icons";

const TEACHER_MENU = [
  {
    key: "student",
    label: "学生管理",
    icon: <TeamOutlined />,
  },
  {
    key: "content",
    label: "内容管理",
    icon: <OneToOneOutlined />,
    children: [
      {
        key: "resource",
        label: "教学资源",
        icon: <FundViewOutlined />,
      },
      {
        key: "homework",
        label: "作业",
        icon: <ReadOutlined />,
      },
      {
        key: "test",
        label: "测试",
        icon: <FundProjectionScreenOutlined />,
      },
    ],
  },
  {
    key: "通知中心",
    label: "通知中心",
    icon: <MessageOutlined />,
  },
  {
    key: "reply",
    label: "答疑中心",
    icon: <SecurityScanOutlined />,
  },
];

const STUDENT_MENU = [
  {
    key: "课程资源",
    label: "课程资源",
    icon: <FundViewOutlined />,
  },
  {
    key: "myWork",
    label: "我的作业",
    icon: <ReadOutlined />,
  },
  {
    key: "myTest",
    label: "我的测试",
    icon: <FundProjectionScreenOutlined />,
  },
  {
    key: "myScore",
    label: "我的成绩",
    icon: <SolutionOutlined />,
  },
  {
    key: "通知公告",
    label: "通知公告",
    icon: <MessageOutlined />,
  },
  {
    key: "reply",
    label: "答疑中心",
    icon: <SecurityScanOutlined />,
  },
];

export { TEACHER_MENU, STUDENT_MENU };
