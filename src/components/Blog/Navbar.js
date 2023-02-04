// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./navbar.scss";
// import blankAvatar from "../../assets/images/blank_avatar.jpg";

const user = "customer";
export default function Navbar() {

  const navigate = useNavigate();

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
          <div 
            className="avatarContainer"
            onClick={() => navigate('/doctor-profile')}
          >
            <img src='' alt="avarta" />
          </div>
        )}
      </div>
    </div>
  );
}
