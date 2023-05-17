import { createSlice, nanoid } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    role: "",
    users: [],
    searchingName: ""
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeRole(state, action) {
      state.role = action.payload;
    },
    submitData(state, action) {
      state.users.push({
        name: action.payload.name,
        role: action.payload.role,
        id: nanoid()
      });
      state.name = "";
      state.role = "";
    },
    deleteUser(state, action) {
      const filteredData = state.users.filter(
        (eachUser) => eachUser.id !== action.payload
      );
      state.users = filteredData;
    },
    searchUser(state, action) {
      // const filteredUsers = state.users.filter((each) =>
      //   each.name.toLowerCase().includes(action.payload.toLowerCase())
      // );
      // state.users = filteredUsers;

      state.searchingName = action.payload;
    }
  }
});

export const {
  changeName,
  changeRole,
  submitData,
  deleteUser,
  searchUser
} = formSlice.actions;
export const formReducer = formSlice.reducer;
