import "./medicalHistory.scss";
import { Table } from "react-bootstrap";

export default function MedicalHistory() {
  return (
    <div className="medicalHistory">
      <div className="header">
        <h1 className="title">Lịch sử khám bệnh</h1>
        <input className="search" type='text' placeholder="tìm bệnh nhân"/>
        <button className="currentSchedule">Lịch Hôm Nay</button>
      </div>
      <hr/>
      <Table striped>
      <thead>
        <tr>
          <th>ID</th>
          <th>Bệnh Nhân</th>
          <th>Tên Bệnh</th>
          <th>Bác sỹ</th>
          <th>Ngày Tái Khám</th>
          {/* <th>Chi tiết</th>
          <th>Username</th> */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
            <button className="btn  btn-success">Tạo Đơn</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td><button className="btn  btn-success">Tạo Đơn</button></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td><button className="btn  btn-success">Tạo Đơn</button></td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}
