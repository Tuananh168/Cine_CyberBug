import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { dangKyTaiKhoanReducer } from "./QuanLyNguoiDungReducer";
import { quanLyPhimReducer } from "./QuanLyPhimReducer";

const rootReducer = combineReducers({
  dangKyTaiKhoanReducer,
  quanLyPhimReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
