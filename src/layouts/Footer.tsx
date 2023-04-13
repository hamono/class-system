import FlexContainer from "@/components/FlexContainer";
import { Layout, Menu } from "antd";

const { Footer } = Layout;

export default function Foot() {
  return (
    <Footer
      style={{
        width: "100%",
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlexContainer
        style={{ width: "100%", height: 60, color: "#0008" }}
        align="center"
        content="center"
      >
        system ©2022 Created by zhangpengpeng
      </FlexContainer>
    </Footer>
  );
}
