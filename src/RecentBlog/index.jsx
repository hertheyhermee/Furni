import "./styles.css";

const RecentBlog = ({ blogImage, blogData, BlogAuthor }) => {
  return (
    <div className="recent d-flex justify-content-center flex-column">
      <img src={blogImage} alt="" className="mb-4 img-fluid rounded-4 " />
      <div className="recent-data">
        <a href="">
          <h3 className="text-capitalize fw-marginally-bold color-primary mb-2 ">
            {blogData}
          </h3>
        </a>
        <span className="mb-4">
          <a href="">{BlogAuthor}</a>
        </span>
      </div>
    </div>
  );
};

export default RecentBlog;
