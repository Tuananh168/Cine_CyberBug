import {
  QuanLyDatVeService,
  quanLyDatVeService,
} from "../../service/QuanLyDatVeService";
import { SET_CHI_TIET_PHONG_VE } from "../constant/QuanLyDatVeConstant";

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);
      console.log("result: ", result);
      dispatch({
        type: SET_CHI_TIET_PHONG_VE,
        chiTietPhongVe: result.data.content,
      });
    } catch (error) {
      console.log("error", error.response);
    }
  };
};

export const datVe = (thongTinDatVe) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.datVe(thongTinDatVe);
      console.log("result: ", result.data.content);
    } catch (error) {
      console.log("error", error.response);
    }
  };
};
