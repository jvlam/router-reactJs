import "./Blog.scss";

function Blog() {
  return (
    <div className="Blog-wrapper">
      <div className="blog-content">
        <div className="slider">
          <h1>Slider</h1>
        </div>
        <div className="blog-body">
          <div className="major-list">
            <ul className="list">
              <li>Sức khoẻ tổng quát</li>
              <li>Sức khoẻ tổng quát</li>
              <li>Sức khoẻ tổng quát</li>
              <li>Sức khoẻ tổng quát</li>
              <li>Sức khoẻ tổng quát</li>
            </ul>
          </div>
          <div className="blog-list">
            <div className="blog-item">
              <img className="blog-image" src={''} alt="blog image" />
              <div className="blog-item-body">
                <h2 className="bolg-item-title">
                  Những lưu ý quan trọng trước khi khám sức khỏe tổng quát
                </h2>
                <p>
                  Trong thời điểm dịch bệnh Covid-19 vẫn đang diễn ra phức tạp,
                  nhiều cha mẹ băn khoăn không biết có nên đưa con đến bệnh viện
                  để tiêm phòng không. Loại vắc xin nào có thể được trì hoãn
                  lịch tiêm, loại vắc xin nào không thể?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
