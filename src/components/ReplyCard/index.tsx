import { useAppSelector } from "@/store";
import { EditOutlined } from "@ant-design/icons";
import { Divider, Modal } from "antd";
import BraftEditor from "braft-editor";
import { useState } from "react";
import FlexContainer from "../FlexContainer";
import styles from "./index.less";

export default function ReplyCard() {
  const { coverUrl, name } = useAppSelector((state) => state.userSlice.user);
  const [textState, setTextSate] = useState(null);

  const [open, setOpen] = useState(false);
  return (
    <>
      {" "}
      <FlexContainer className={styles.root} direction="column">
        <FlexContainer style={{ width: "100%" }} direction="column" gap={15}>
          <FlexContainer align="center" gap={10}>
            <img style={{ width: 30 }} src={coverUrl} alt="" />
            <span>{name}</span>
          </FlexContainer>
          <span style={{ padding: "0 5px" }}>
            不错不错怒不饿发呢覅分内飞飞你粉蝶非法聂风分if呢发i嗯发IE分内分内不错不错怒不饿发呢覅分内飞飞你粉蝶非法聂风分if呢发i嗯发IE分内分内不错不错怒不饿发呢覅分内飞飞你粉蝶非法聂风分if呢发i嗯发IE分内分内不错不错怒不饿发呢覅分内飞飞你粉蝶非法聂风分if呢发i嗯发IE分内分内不错不错怒不饿发呢覅分内飞飞你粉蝶非法聂风分if呢发i嗯发IE分内分内不错不错怒不饿发呢覅分内飞飞你粉蝶非法聂风分if呢发i嗯发IE分内分内不错不错怒不饿发呢覅分内飞飞你粉蝶非法聂风分if呢发i嗯发IE分内分内
            <a
              style={{ marginLeft: "20px", fontSize: 12 }}
              onClick={() => setOpen(true)}
            >
              <EditOutlined size={12} style={{ marginRight: 5 }} />
              回复
            </a>
          </span>
        </FlexContainer>
        <Divider style={{ margin: "14px 0" }} />
        <FlexContainer style={{ width: "100%" }} direction="column" gap={15}>
          <FlexContainer align="center" gap={10}>
            <img style={{ width: 30 }} src={coverUrl} alt="" />
            <span>{name}</span>
          </FlexContainer>
          <span style={{ padding: "0 5px" }}>
            不错不错怒不饿发呢覅分内飞飞你粉蝶非法聂风分if呢发i嗯发IE分内分内
          </span>
        </FlexContainer>
      </FlexContainer>
      <Modal
        open={open}
        title="答疑"
        width={800}
        onCancel={() => setOpen(false)}
      >
        <BraftEditor value={textState} onChange={setTextSate} />
      </Modal>
    </>
  );
}
