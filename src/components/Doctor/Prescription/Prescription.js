import { useState } from "react";
import "./Prescription.scss";

function Prescription() {

    const [dugName, setDugName] = useState('')

  return (
    <div className="wrapper">
      <h1 className="title">Đơn Thuốc</h1>
      <hr />
      <div className="main-prescription">
        <div className="infoList">
          <div className="input-group mb-3">
            <select className="form-select" id="inputGroupSelect02">
              <option selected>Chọn Thuốc</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label className="input-group-text" for="inputGroupSelect02">
              Options
            </label>
          </div>
          <div className="input-group mb-3">
            <select className="form-select" id="inputGroupSelect02">
              <option selected>Loại Thuốc</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label className="input-group-text" for="inputGroupSelect02">
              Options
            </label>
          </div>
          <input type="text" placeholder="số lượng" />
          <input type="text" placeholder="giá" />
          <div className="recall-date">
            <h4 for="birthday">Hẹn Ngày Tái Khám: </h4>
            <input type="date" id="birthday" name="birthday" />
          </div>
        </div>
        <div className="note">
            <h4><label for="w3review">Thêm nhắc nhở</label></h4>
            <textarea id="w3review" name="w3review" rows="4" cols="50">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea>
            <br/>
        </div>
      </div>
      <button className="mt-3 btn-prescription">Tạo Đơn Thuốc</button>
    </div>
  );
}

export default Prescription;
