

import "./DoctorProfile.scss";
import doctor from '../../../assets/doctor.jpeg'

export default function DoctorProfile() {
  return (
    <div className="userInfoContainer">
      <h1 className="title">Hồ Sơ Của Tôi</h1>
      <hr/>
      <div className="userInfo">
        <div className="infoList">
          <input placeholder="Họ và tên" />
          <input value="Email" />
          <input value="Địa chỉ" />
          <input value="Giới tính" />
          <input value="Điện thoại" />
          <input value="Ngày sinh" />
        </div>
        <div className="accountAvatar">
          <div>
            <img src={doctor} alt="account avarta" className="avata"/>
          </div>
          <button className="uploadImage">Chọn Ảnh</button>
        </div>
      </div>
      <button>LƯU</button>
    </div>
  );
}
