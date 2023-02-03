// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.scss";
// import blankAvatar from "../../assets/images/blank_avatar.jpg";

const user = "customer";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className="logo">Health Care System</span>
      </div>
      <div className="navbar-center">
        <div className="searchBar">
          {/* <FontAwesomeIcon  className="searchIcon" /> */}
          <input
            type="text"
            className="searchInput"
            placeholder="Tìm kiếm bài viết"
          />
        </div>
      </div>
      <div className="navbar-right">
        {(user === "customer" || !user) && (
          <button className="navbar-button">ĐĂNG KÝ KHÁM</button>
        )}
        {user === "doctor" && (
          <button className="navbar-button">LỊCH KHÁM</button>
        )}
        <hr />
        {!user && <button className="navbar-button">ĐĂNG NHẬP</button>}
        {user && (
          <div className="avatarContainer">
            <img src='' alt="" />
          </div>
        )}
      </div>
    </div>
  );
}
