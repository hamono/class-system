import { Card, Typography, Button, Dropdown, MenuProps } from "antd";
import FlexContainer from "@/components/FlexContainer";
import { MoreOutlined } from "@ant-design/icons";
import Word from "@/assets/word.svg";
import { resourceTypeDetail } from "@/constants/resourceType";

const { Title, Text } = Typography;

export default function ResourceCard({
  type,
}: {
  type: { color: string; coverUrl: string };
}) {
  const items: MenuProps["items"] = [
    {
      label: <span>下载</span>,
      key: "0",
    },
    {
      label: (
        <span>
          <Text type="danger">删除</Text>
        </span>
      ),
      key: "1",
    },
  ];
  return (
    <Card
      hoverable
      style={{ width: 200 }}
      bodyStyle={{ padding: "5px 10px" }}
      cover={
        <FlexContainer
          align="center"
          content="center"
          style={{
            width: 200,
            height: 100,
            backgroundColor: type.color,
          }}
        >
          <img
            style={{
              width: 80,
            }}
            src={type.coverUrl}
          />
        </FlexContainer>
      }
    >
      <FlexContainer direction="column" gap={3}>
        <FlexContainer
          style={{ width: "100%" }}
          content="space-between"
          align="center"
        >
          <Title level={5} style={{ marginBottom: 0, fontSize: 14 }}>
            计算机
          </Title>
          <Dropdown menu={{ items }} placement="bottomRight">
            <Button
              type="text"
              size="small"
              icon={<MoreOutlined style={{ transform: "rotate(90deg)" }} />}
            />
          </Dropdown>
        </FlexContainer>
        <Text type="secondary" style={{ fontSize: 10 }}>
          大小：22MB
        </Text>
      </FlexContainer>
    </Card>
  );
}
