import { CSSProperties } from "react";
import styles from "./index.less";

interface IFlexContainerProps {
  style?: CSSProperties;
  content?: "center" | "space-between" | "flex-start" | "flex-end";
  align?: "center" | "space-between" | "flex-start" | "flex-end";
  direction?: "row" | "column";
  gap?: number;
  className?: string;
  children: React.ReactNode;
}

export default function FlexContainer({
  style = {},
  content = "flex-start",
  align = "flex-start",
  gap = 0,
  className = "",
  direction = "row",
  children,
}: IFlexContainerProps) {
  return (
    <div
      style={{
        flexDirection: direction,
        justifyContent: content,
        alignItems: align,
        gap: gap,
        ...style,
      }}
      className={`${styles.root} ${className}`}
    >
      {children}
    </div>
  );
}
