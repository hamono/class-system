import FlexContainer from "@/components/FlexContainer";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Input, Typography } from "antd";
import { useLocation, useNavigate } from "umi";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
import { useState } from "react";

export default function WorkDetail() {
  const navigate = useNavigate();
  const location = useLocation();

  const [textState, setTextSate] = useState(null);

  return (
    <FlexContainer style={{ width: "100%" }} direction="column">
      <FlexContainer
        style={{ width: "100%" }}
        align="center"
        content="space-between"
      >
        <FlexContainer align="center" gap={20}>
          <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            onClick={() =>
              navigate(location.pathname.split("/").slice(0, -2).join("/"))
            }
          >
            返回
          </Button>
          <FlexContainer align="center">
            <Typography.Title
              level={5}
              style={{ fontSize: 14, marginBottom: 0 }}
            >
              标题：
            </Typography.Title>
            <Input style={{ width: "80%" }} size="small" />
          </FlexContainer>
        </FlexContainer>

        <Button type="primary">保存</Button>
      </FlexContainer>
      <FlexContainer
        style={{ width: "100%", marginTop: 30, padding: "0 20px" }}
      >
        <BraftEditor value={textState} onChange={setTextSate} />
      </FlexContainer>
    </FlexContainer>
  );
}
