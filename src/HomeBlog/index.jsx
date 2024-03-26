import { Link } from "react-router-dom";
import RecentBlog from "../RecentBlog";
import './style.css'
import PostOne from "/images/post-1.jpg";
import PostTwo from "/images/post-2.jpg";
import PostThree from "/images/post-3.jpg";

const HomeBlog = () => {
  return (
    <div className="container home-blog">
      <div className="top-title d-flex justify-content-between align-items-center mb-5">
        <h2>Recent Blog</h2>
        <Link to="/blogs" className="view-posts">View All Posts </Link>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <RecentBlog
            blogImage={PostOne}
            blogData="First Time Home Owner Ideas"
            BlogAuthor="Kristin Watson"
            CreatedDate="Dec 19, 2021"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 mt-5 mt-sm-0">
          <RecentBlog
            blogImage={PostTwo}
            blogData="First Time Home Owner Ideas"
            BlogAuthor="Robert Fox"
            CreatedDate="Dec 15, 2021"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 mt-5 mt-md-0">
          <RecentBlog
            blogImage={PostThree}
            blogData="First Time Home Owner Ideas"
            BlogAuthor="Kristin Watson"
            CreatedDate="Dec 12, 2021"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
