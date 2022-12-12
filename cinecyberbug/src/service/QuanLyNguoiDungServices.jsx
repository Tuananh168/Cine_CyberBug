import { baseService } from "./baseServices";

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }

  dangNhap = (thongTinDangNhap) => {
    //Tài Khoản : , Mật Khẩu :
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };

  dangKyTaiKhoan = (taiKhoanDangKy) => {
    return this.post(`/api/QuanLyNguoiDung/DangKy`, taiKhoanDangKy);
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
