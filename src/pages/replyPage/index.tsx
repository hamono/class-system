import FlexContainer from "@/components/FlexContainer";
import ReplyCard from "@/components/ReplyCard";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

export default function ReplyPage() {
  return (
    <FlexContainer style={{ width: "100%" }} direction="column" gap={20}>
      <FlexContainer
        style={{ width: "100%" }}
        align="center"
        content="space-between"
      >
        <div style={{ width: 250 }}>
          <Input.Search placeholder="输入名称搜索" enterButton />
        </div>
        <Button type="primary" icon={<PlusOutlined />}>
          新建答疑
        </Button>
      </FlexContainer>
      <ReplyCard />
      <ReplyCard />
    </FlexContainer>
  );
}
