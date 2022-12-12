import { quanLyPhimService } from "../../service/QuanLyPhimServices";
import {
  LIST_BANNER_PHIM,
  LIST_MENU_PHIM,
} from "../constant/QuanLyPhimConstant";

export const layDanhSachBannerAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layDanhSachBanner();
      dispatch({
        type: LIST_BANNER_PHIM,
        listBanner: result.data.content,
      });
      console.log("result: ", result);
    } catch (error) {
      console.log("error: ", error);
    }
  };
};

export const layDanhSachPhim = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layDanhSachPhim();
      dispatch({
        type: LIST_MENU_PHIM,
        arrPhim: result.data.content,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  };
};
