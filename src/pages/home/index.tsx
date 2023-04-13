import CourseCard from "@/components/CourseCard";
import FlexContainer from "@/components/FlexContainer";
import { Tabs, Button, Input, Modal, Empty } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useInit } from "@/hooks/useInit";
import CourseApi from "@/api/course";
import { useAppSelector } from "@/store";
import { CourseModel } from "@/features/courseSlice";

const { Search } = Input;

const CARD_GAP = 30;
const CARD_WIDTH = 300;

function Extra() {
  const [courseList, setCourseList] = useState<CourseModel[]>([]);
  const [isOPen, setIsOpen] = useState(false);

  const handleSearch = useCallback(async (value: number) => {
    const course = (await CourseApi.getCourseList({courseId: value})) as any;
    setCourseList(course)
  }, [])

  return (
    <FlexContainer gap={20}>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setIsOpen(true)}
      >
        添加课程
      </Button>
      <Modal
        title="添加课程"
        open={isOPen}
        footer={null}
        width={660}
        onCancel={() => setIsOpen(false)}
      >
        <Search
          style={{ marginBottom: 40 }}
          placeholder="输入课程号或名称搜索"
          enterButton
          onSearch={handleSearch as any}
        />
        {courseList.length ? (
          <FlexContainer style={{ width: "100%", flexWrap: "wrap" }} gap={12}>
            {courseList.map((course) => {
              return <CourseCard {...course} isApply={true} />
        })}
          </FlexContainer>
        ) : (
          <Empty
            description={<span style={{ color: "#0008" }}>暂无数据</span>}
          />
        )}
      </Modal>
    </FlexContainer>
  );
}

export default function Home() {

  useInit();

  const { number } = useAppSelector(state => state.userSlice.user)
  const [courses, setCourse] = useState<CourseModel[]>([])

  const containRef = useRef<HTMLDivElement>(null);
  const [curGap, setCurGap] = useState(CARD_GAP);

  const courseList = useMemo(() => {
    return <FlexContainer style={{ flexWrap: "wrap" }} gap={curGap}>
      {courses.map((course) => {
        return <CourseCard {...course} isApply={false} />
      })}
  </FlexContainer>
  }, [courses])

  const handleCourse = async () => {
    const courses  = (await CourseApi.getCourseList({number})) as any

    setCourse(courses)
  }

  useEffect(() => {
    handleCourse()
  }, [number])

  useEffect(() => {
    const width = containRef.current?.offsetWidth || 0;
    const num = Math.floor(width / (CARD_GAP + CARD_WIDTH));
    const rest = width % (CARD_GAP + CARD_WIDTH);

    setCurGap(CARD_GAP + (rest + CARD_GAP) / (num + 1));
  }, []);

  const items = [{ label: "我加入的", key: "item-1", children: courseList }];
  return (
    <div ref={containRef} style={{ padding: "0 20px" }}>
      <Tabs items={items} size="large" tabBarExtraContent={<Extra />}></Tabs>
    </div>
  );
}
