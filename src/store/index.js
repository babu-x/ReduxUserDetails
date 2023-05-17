import { configureStore } from "@reduxjs/toolkit";
import {
  formReducer,
  changeName,
  changeRole,
  submitData,
  deleteUser,
  searchUser
} from "./slices/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer
  }
});

const finalState = store.getState();
console.log(finalState);

export { searchUser, store, changeName, changeRole, submitData, deleteUser };
