import { quanLyNguoiDungService } from "../../service/QuanLyNguoiDungServices";
import { notifiFuntion } from "../../utils/notification/Notification";
import {
  DANG_KY_ACTION,
  DANG_NHAP_ACTION,
} from "../constant/QuanLyNguoiDungConstants";

export const dangKyTaiKhoan = (taiKhoanDangKy) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangKyTaiKhoan(
        taiKhoanDangKy
      );
      dispatch({
        type: DANG_KY_ACTION,
        taiKhoanDangKy: result.data.content,
      });
      notifiFuntion("success", "Bạn đã đăng ký tài khoản thành công !");
      console.log("result", result);
    } catch (error) {
      console.log("error", error);
      notifiFuntion(
        "error",
        "Rất tiếc , bạn đã đăng ký tài khoản không thành công !"
      );
    }
  };
};

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
      dispatch({
        type: DANG_NHAP_ACTION,
        thongTinDangNhap: result.data.content,
      });
      console.log("Data", result);
      notifiFuntion("success", "Bạn đã đăng nhập tài khoản thành công !");
    } catch (error) {
      console.log("error: ", error);
      notifiFuntion(
        "error",
        "Rất tiếc bạn đăng nhập tài khoản không thành công!"
      );
    }
  };
};
