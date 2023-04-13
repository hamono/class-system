import UserApi from "@/api/user";
import { updateCurrentCourse } from "@/features/courseSlice";
import { updateLogin, updateUser, UserModel } from "@/features/userSlice";
import { useAppDispatch } from "@/store";
import { useEffect } from "react";

export function useInit() {
  const dispatch = useAppDispatch();

  const handleInit = async () => {
    const { user, course } = (await UserApi.checkCurrentUser()) as any;
    dispatch(updateUser(user));
    course && dispatch(updateCurrentCourse(course));
    dispatch(updateLogin(true));
  };

  useEffect(() => {
    handleInit();
  }, []);
}
