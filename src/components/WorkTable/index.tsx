import FlexContainer from "@/components/FlexContainer";
import { StudentModel } from "@/features/userSlice";
import { Button, Typography, Card } from "antd";
import React from "react";
import { useNavigate } from "umi";
import Test from "@/assets/test.svg";
import Homework from "@/assets/homework.svg";

const { Title, Text } = Typography;

export default function WorkTable() {
  const navigate = useNavigate();
  return (
    <Card
      style={{ width: "48%" }}
      hoverable
      bodyStyle={{ padding: 10 }}
      onClick={() => navigate("233/detail")}
    >
      <FlexContainer align="center" content="space-between">
        <FlexContainer align="center" gap={10}>
          <img style={{ width: 50, height: 50 }} src={Homework} />
          <FlexContainer
            style={{ height: 50, padding: "2px 0" }}
            direction="column"
            content="space-between"
          >
            <span style={{ fontSize: 14 }}>作业</span>
            <FlexContainer style={{ fontSize: 12, height: "16px" }} gap={20}>
              <Text type="secondary">创建时间：2020.10.23</Text>
              <Text type="secondary">到期时间：2020.10.23</Text>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
        <Button
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            navigate("233/review");
          }}
        >
          批阅
        </Button>
      </FlexContainer>
    </Card>
  );
}
