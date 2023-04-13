import { strSearch } from "@/utils";
import request from "./request";

const CourseApi = {
  getCourseList: async (parm: { number?: string; courseId?: string }) => {
    return await request(`/api/getCourse${strSearch(parm)}`, {
      method: "GET",
    });
  },
};

export default CourseApi;
