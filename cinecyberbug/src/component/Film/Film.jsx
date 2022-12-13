import React from "react";
import "./Film.css";
import { StarOutlined } from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from "react-router";

const Film = (props) => {
  const navigate = useNavigate();
  const { phim } = props;

  return (
    <div className="card-main container">
      <div class="card ">
        <div class="card-header">
          <img src={phim.hinhAnh} alt={phim.hinhAnh} />
        </div>
        <div class="card-body">
          <h1>{phim.tenPhim}</h1>
          <p>
            {phim.moTa.length > 100 ? (
              <p>{phim.moTa.slice(0, 100)}...</p>
            ) : (
              <p>{phim.moTa}</p>
            )}
          </p>
          <p className="mb-10 font-bold text-xl text-gray-500">
            Khởi chiếu : {moment(phim.ngayKhoiChieu).format("DD-MM-YYYY")}
          </p>
          <div className="grid grid-cols-2">
            <div className="col-start-1">
              <button
                class="tag tag-blue"
                onClick={() => navigate(`/detail/${phim.maPhim}`)}
              >
                Mua vé
              </button>
              <a class="tag tag-pink" target="_blank" href={phim.trailer}>
                Xem Trailer
              </a>
            </div>
            <div className="col-start-5">
              <div className="flex items-center">
                Đánh giá : {phim.danhGia}
                <StarOutlined className="text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Film;
