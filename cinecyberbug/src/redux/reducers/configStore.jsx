import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { dangKyTaiKhoanReducer } from "./QuanLyNguoiDungReducer";

const rootReducer = combineReducers({
  dangKyTaiKhoanReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
