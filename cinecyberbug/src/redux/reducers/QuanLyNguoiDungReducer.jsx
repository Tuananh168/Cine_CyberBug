import { ACCESSTOKEN, USER_LOGIN } from "../../utils/setting/Config";
import {
  DANG_KY_ACTION,
  DANG_NHAP_ACTION,
} from "../constant/QuanLyNguoiDungConstants";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  // Sẽ kiểm tra nếu người dùng đã đăng nhâp thì sẽ không cần đăng nhập nữa
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  dangKyTaiKhoan: [],
  userLogin: {},
};

export const dangKyTaiKhoanReducer = (state = initialState, action) => {
  switch (action.type) {
    case DANG_KY_ACTION:
      return { ...state };
    case DANG_NHAP_ACTION: {
      const { thongTinDangNhap } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(ACCESSTOKEN, thongTinDangNhap.accessToken);
      return { ...state, userLogin: thongTinDangNhap };
    }
    default:
      return state;
  }
};
