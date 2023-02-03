// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./options.scss";
import { Link } from "react-router-dom";

export default function Options() {
  return (
    <div className="topbarOptions">
      <div className="optionItem">
        <span>Chuyên khoa trọng điểm</span>
        {/* <FontAwesomeIcon icon={faChevronDown} className="optionIcon" /> */}
        <div className="dropdown">
          <span className="dropItem">Tim mạch</span>
          <span className="dropItem">Thần kinh</span>
        </div>
      </div>
      <div className="optionItem">
        <span>Danh sách bác sĩ</span>
      </div>
      <div className="optionItem">
        <span>Dịch vụ khám</span>
      </div>
      <div className="optionItem">
        <Link to='/blogs'><span>Bài viết</span></Link>
      </div>
      <div className="optionItem">
        <span>Khác</span>
        {/* <FontAwesomeIcon icon={faChevronDown} className="optionIcon" /> */}
      </div>
    </div>
  );
}
