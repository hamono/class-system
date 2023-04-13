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
          <Typography.Title
              level={5}
              style={{ fontSize: 14, marginBottom: 0 }}
            >
              作业一
            </Typography.Title>
        </FlexContainer>

        <Button type="primary">保存</Button>
      </FlexContainer>
      <FlexContainer
        style={{ width: "100%", marginTop: 10, padding: "0 20px" }}
      >
        我是题目一啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
      </FlexContainer>
      <FlexContainer
        style={{ width: "100%", marginTop: 30, padding: "0 20px" }}
      >
        <BraftEditor value={textState} onChange={setTextSate} />
      </FlexContainer>
    </FlexContainer>
  );
}
