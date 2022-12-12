import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { dangKyTaiKhoanReducer } from "./QuanLyNguoiDungReducer";
import { quanLyPhimReducer } from "./QuanLyPhimReducer";
import { QuanLyRapReducer } from "./QuanLyRapReducer";

const rootReducer = combineReducers({
  dangKyTaiKhoanReducer,
  quanLyPhimReducer,
  QuanLyRapReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
