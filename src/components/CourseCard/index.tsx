import { Card, Typography, Button } from "antd";
import FlexContainer from "../FlexContainer";
import Course from "../../assets/course.svg";
import { useNavigate } from "umi";
import { memo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { CourseModel, updateCurrentCourse } from "@/features/courseSlice";
import { updateUser } from "@/features/userSlice";
import { UserType } from "@/type";

const { Title, Text } = Typography;

export interface CourseCardProps extends CourseModel {
  isApply: boolean;
}

export function CourseCard({ isApply, ...course }: CourseCardProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.userSlice.user)

  const handleClick = useCallback(() => {
    navigate(`course/${course.courseId}`);
    dispatch(updateUser({ ...user, type: UserType.TEACHER }));
    dispatch(updateCurrentCourse(course));
  }, []);

  return (
    <Card
      hoverable
      style={{ width: 300 }}
      bodyStyle={{ padding: 10 }}
      onClick={!isApply ? handleClick : undefined}
      cover={
        <img
          style={{
            width: 300,
            height: 140,
            backgroundColor: "#99CCFF55",
          }}
          alt="example"
          src={Course}
        />
      }
    >
      <FlexContainer direction="column" gap={5}>
        <FlexContainer
          style={{ width: "100%" }}
          align="center"
          content="space-between"
        >
          <Title level={5} style={{ marginBottom: 0 }}>
            计算机
          </Title>
          {isApply && (
            <Button
              type="primary"
              size="small"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              加入
            </Button>
          )}
        </FlexContainer>

        <Text
          type="secondary"
          style={{ fontSize: 12, width: "100%" }}
          ellipsis={{ tooltip: "I am ellipsis now!" }}
        >
          Ant Design (secondary)Ant Design (secondary)Ant Design (secondary)Ant
          Design (secondary)Ant Design (secondary)Ant Design (secondary)Ant
          Design (secondary)
        </Text>
        <Text type="secondary" style={{ fontSize: 12 }}>
          教师：加红姐
        </Text>
      </FlexContainer>
    </Card>
  );
}

export default memo(CourseCard);
