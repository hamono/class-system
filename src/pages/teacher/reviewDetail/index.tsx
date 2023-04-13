import FlexContainer from "@/components/FlexContainer";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Input, InputNumber, Table, Typography } from "antd";
import BraftEditor from "braft-editor";
import { useState } from "react";
import { useLocation, useNavigate } from "umi";

export default function ReviewDetail() {
  const navigate = useNavigate();
  const location = useLocation();

  const [textState, setTextSate] = useState(null);

  return (
    <FlexContainer style={{ width: "100%" }} direction="column">
      <FlexContainer style={{ width: "100%" }} content="space-between">
        <FlexContainer align="center" gap={20}>
          <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            onClick={() =>
              navigate(location.pathname.split("/").slice(0, -1).join("/"))
            }
          >
            返回
          </Button>
          <FlexContainer align="center" gap={10}>
            <Typography.Title
              level={5}
              style={{ fontSize: 14, marginBottom: 0 }}
            >
              哈默默
            </Typography.Title>
            <Typography.Title
              level={5}
              style={{ fontSize: 14, marginBottom: 0, marginTop: 0 }}
            >
              3180209036
            </Typography.Title>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer align="center" gap={10} style={{ width: 300 }}>
          <Typography.Title
            level={5}
            style={{ fontSize: 14, marginBottom: 0, marginTop: 0 }}
          >
            评分:
          </Typography.Title>
          <InputNumber size="small" style={{ width: "50%" }} />
          <Button size="small" type="primary">
            保存
          </Button>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer
        style={{ width: "100%", marginTop: 20, padding: "0 20px" }}
        direction="column"
      >
        <Typography.Title
          level={5}
          style={{ fontSize: 14, marginBottom: 0, marginTop: 0 }}
        >
          题目一
        </Typography.Title>
        <span>我是题目一啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</span>
      </FlexContainer>
      <FlexContainer
        style={{ width: "100%", marginTop: 30, padding: "0 10px" }}
      >
        <BraftEditor value={textState} onChange={setTextSate} />
      </FlexContainer>
    </FlexContainer>
  );
}
