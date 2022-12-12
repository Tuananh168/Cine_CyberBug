import { quanLyRapService } from "../../service/QuanLyRapService";
import {
  SET_CHI_TIET_PHIM,
  SET_HE_THONG_RAP,
} from "../constant/QuanLyRapConstant";

export const layDanhSachHeThongRapAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layDanhSachHeThongRap();
      console.log("result", result.data.content);

      if (result.status === 200) {
        dispatch({
          type: SET_HE_THONG_RAP,
          heThongRapChieu: result.data.content,
        });
      }
    } catch (errors) {
      console.log("error", errors);
    }
  };
};

export const layThongTinChiTietPhim = (id) => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layThongTinLichChieuPhim(id);
      console.log("result", result);

      dispatch({
        type: SET_CHI_TIET_PHIM,
        filmDetail: result.data.content,
      });
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};
