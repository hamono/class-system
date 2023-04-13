import { Modal } from "antd";
import FlexContainer from "../FlexContainer";
import styles from "./index.less";
import { useState } from "react";
import { avatarList } from "@/constants/avatar";

export interface IAvatarSelectorProps {
  open: boolean;
  setOpen: React.Dispatch<boolean>;
  value: string;
  onChange?: (value: string) => void;
}

export default function AvatarSelector({
  value,
  onChange,
  open,
  setOpen,
}: IAvatarSelectorProps) {
  const [type, setType] = useState(value || "");
  const handleClick = (value: string) => {
    setType(value);
    onChange && onChange(value);
    setTimeout(() => {
      setOpen(false);
    }, 200);
  };
  return (
    <Modal
      open={open}
      title="选择头像"
      onCancel={() => setOpen(false)}
      footer={null}
    >
      <FlexContainer
        align="center"
        content="space-between"
        style={{ width: "100%", flexWrap: "wrap" }}
        gap={20}
      >
        {avatarList.map((avatar) => {
          return (
            <img
              style={
                type === avatar.key
                  ? {
                      backgroundColor: "rgba(183, 231, 242, 0.8)",
                      border: "1px solid rgba(52, 140, 251, 0.6)",
                    }
                  : {}
              }
              src={avatar.url}
              key={avatar.key}
              onClick={() => handleClick(avatar.key)}
              className={styles.item}
              alt=""
            />
          );
        })}
      </FlexContainer>
    </Modal>
  );
}
