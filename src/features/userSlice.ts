import { UserType } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserModel {
  type: UserType;
  name: string;
  coverUrl: string;
  gender: string;
  number: string;
  college: string;
}

export interface StudentModel extends UserModel {
  classes: string;
}

export interface IUserSliceState {
  user: UserModel;
  login: boolean;
}

const initialState: IUserSliceState = {
  user: {
    type: UserType.STUDENT,
    name: "哈默默",
    coverUrl: "",
    gender: "",
    number: "",
    college: "",
  },
  login: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    updateUser: (state, { payload }: PayloadAction<UserModel>) => {
      state.user = payload;
    },
    updateLogin: (state, { payload }: PayloadAction<boolean>) => {
      state.login = payload;
    },
  },
});

export const { updateUser, updateLogin } = userSlice.actions;

export default userSlice.reducer;
