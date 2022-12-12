import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { QuanLyDatVeReducer } from "./QuanLyDatVeReducer";
import { dangKyTaiKhoanReducer } from "./QuanLyNguoiDungReducer";
import { quanLyPhimReducer } from "./QuanLyPhimReducer";
import { QuanLyRapReducer } from "./QuanLyRapReducer";

const rootReducer = combineReducers({
  dangKyTaiKhoanReducer,
  quanLyPhimReducer,
  QuanLyRapReducer,
  QuanLyDatVeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
