import FlexContainer from "@/components/FlexContainer";
import { Select, Input, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import ResourceCard from "./components/ResourceCard";
import { resourceTypeDetail } from "@/constants/resourceType";
import { useEffect, useRef, useState } from "react";

const classification = [
  {
    label: "全部",
    value: "all",
  },
  {
    label: "文档",
    value: "word",
  },
  {
    label: "表格",
    value: "excel",
  },
  {
    label: "演示文稿",
    value: "ppt",
  },
  {
    label: "其他",
    value: "other",
  },
];

const CARD_GAP = 20;
const CARD_WIDTH = 200;

export default function Resource() {
  const containRef = useRef<HTMLDivElement>(null);
  const [curGap, setCurGap] = useState(CARD_GAP);

  useEffect(() => {
    const width = containRef.current?.offsetWidth || 0;
    const num = Math.floor(width / (CARD_GAP + CARD_WIDTH));
    const rest = width % (CARD_GAP + CARD_WIDTH);

    setCurGap(CARD_GAP + (rest + CARD_GAP) / (num - 1));
  }, []);

  return (
    <FlexContainer
      style={{ width: "100%", maxHeight: "100%" }}
      direction="column"
    >
      <FlexContainer
        style={{ width: "100%" }}
        align="center"
        content="space-between"
      >
        <FlexContainer
          style={{ width: 430 }}
          align="center"
          content="space-between"
        >
          <Select
            style={{ width: 170 }}
            defaultValue={"all"}
            options={classification}
          />
          <div style={{ width: 250 }}>
            <Input.Search placeholder="输入名称搜索" enterButton />
          </div>
        </FlexContainer>
        <Button type="primary" icon={<UploadOutlined />}>
          上传资源
        </Button>
      </FlexContainer>
      <div ref={containRef} style={{ width: "100% " }}>
        <FlexContainer style={{ marginTop: 20, flexWrap: "wrap" }} gap={curGap}>
          <ResourceCard type={resourceTypeDetail.Excel} />
          <ResourceCard type={resourceTypeDetail.Other} />
          <ResourceCard type={resourceTypeDetail.PPT} />
          <ResourceCard type={resourceTypeDetail.Word} />
          <ResourceCard type={resourceTypeDetail.Excel} />
          <ResourceCard type={resourceTypeDetail.Other} />
        </FlexContainer>
      </div>
    </FlexContainer>
  );
}
