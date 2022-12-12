import { DAT_VE, SET_CHI_TIET_PHONG_VE } from "../constant/QuanLyDatVeConstant"


const stateDefault = {
    chiTietPhongVe: {},
    danhSachGheDangDat: [],
    thongTinDatVe: {
        "maLichChieu": "",
        "danhSachVe": [
            {
                "maGhe": "",
                "giaVe": 0,
            }
        ]
    }
}


export const QuanLyDatVeReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case SET_CHI_TIET_PHONG_VE: {
            console.log("action", action)
            state.chiTietPhongVe = action.chiTietPhongVe
            return { ...state }
        }
        case DAT_VE: {
            let danhSachGheCapNhat = [...state.danhSachGheDangDat];
            let index = danhSachGheCapNhat.findIndex(gheDangDat => gheDangDat.maGhe === action.gheDuocChon.maGhe)
            if (index != -1) {
                danhSachGheCapNhat.splice(index, 1)
            } else {
                danhSachGheCapNhat.push(action.gheDuocChon)

            }
            return { ...state, danhSachGheDangDat: danhSachGheCapNhat }
        }

        default: return { ...state }
    }


}