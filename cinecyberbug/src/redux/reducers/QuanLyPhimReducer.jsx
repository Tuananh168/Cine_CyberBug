import {
  LIST_BANNER_PHIM,
  LIST_MENU_PHIM,
  SET_PHIM_DANG_CHIEU,
  SET_PHIM_SAP_CHIEU,
} from "../constant/QuanLyPhimConstant";

const initialState = {
  listBanner: [],
  arrPhim: [],
  dangChieu: true,
  sapChieu: true,
  arrFilmDefault: [],
};

export const quanLyPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_BANNER_PHIM: {
      return {
        ...state,
        listBanner: action.listBanner,
      };
    }
    case LIST_MENU_PHIM: {
      return {
        ...state,
        arrPhim: action.arrPhim,
        arrFilmDefault: action.arrPhim,
      };
    }
    case SET_PHIM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu;

      state.arrPhim = state.arrFilmDefault.filter(
        (film) => film.dangChieu === state.dangChieu
      );
      return { ...state, sapChieu: false };
    }
    case SET_PHIM_SAP_CHIEU: {
      state.sapChieu = !state.sapChieu;
      state.arrPhim = state.arrFilmDefault.filter(
        (film) => film.sapChieu === state.sapChieu
      );
      return { ...state, dangChieu: false };
    }

    default:
      return state;
  }
};
