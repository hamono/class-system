import FlexContainer from "@/components/FlexContainer";
import { Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import WorkTable from "@/components/WorkTable";

const CARD_GAP = 70;
const CARD_WIDTH = 200;

export default function Test() {
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
        <div style={{ width: 250 }}>
          <Input.Search placeholder="输入名称搜索" enterButton />
        </div>
      </FlexContainer>
      <div ref={containRef} style={{ width: "100% " }}>
        <FlexContainer
          style={{ marginTop: 20, flexWrap: "wrap" }}
          content="space-between"
          gap={20}
        >
          <WorkTable />
          <WorkTable />
          <WorkTable />
        </FlexContainer>
      </div>
    </FlexContainer>
  );
}
