import { StudentModel, UserModel } from "./userSlice";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CourseModel {
  name: string;
  description: string;
  owner: UserModel;
  coverUrl: string;
  courseId: string;
}

export interface ICourseState {
  courseList: CourseModel[];
  currentCourse: CourseModel | undefined;
}

const initialState: ICourseState = {
  courseList: [],
  currentCourse: undefined,
};

const courseSlice = createSlice({
  name: "courseSlice",
  initialState: initialState,
  reducers: {
    updateCourseList: (state, { payload }: PayloadAction<CourseModel[]>) => {
      state.courseList = payload;
    },
    updateCurrentCourse: (state, { payload }: PayloadAction<CourseModel>) => {
      state.currentCourse = payload;
    },
  },
});

export const { updateCourseList, updateCurrentCourse } = courseSlice.actions;

export default courseSlice.reducer;
