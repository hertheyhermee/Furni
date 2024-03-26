import Hero from "../../Hero/Hero";
import './blog.css'
import Post1 from '../../../public/images/post-1.jpg'
import Post2 from '../../../public/images/post-2.jpg'
import Post3 from '../../../public/images/post-3.jpg'
import RecentBlog from "../../RecentBlog";
import Carousel from "../../Carousel"

const Blog = () => {
  return (
    <div className="blogs">
      <div>
        <Hero  
            header={'Blog'}
            subHeader={'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.'}
        />
      </div>
      <div className="blog-section">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4 mb-5">
                    <RecentBlog 
                        blogImage={Post1}
                        blogData={'First Time Home Owner Ideas'}
                        BlogAuthor={'by Kriston Watson on Dec 19, 2021'}
                    />
                </div>
                <div className="col-12 col-md-4 mb-5">
                    <RecentBlog 
                        blogImage={Post2}
                        blogData={'First Time Home Owner Ideas'}
                        BlogAuthor={'by Kriston Watson on Dec 15, 2021'}
                    />
                </div>
                <div className="col-12 col-md-4 mb-5">
                    <RecentBlog 
                        blogImage={Post3}
                        blogData={'First Time Home Owner Ideas'}
                        BlogAuthor={'by Kriston Watson on Dec 12, 2021'}
                    />
                </div>
                <div className="col-12 col-md-4 mb-5 ">
                    <RecentBlog 
                        blogImage={Post1}
                        blogData={'First Time Home Owner Ideas'}
                        BlogAuthor={'by Kriston Watson on Dec 19, 2021'}
                    />
                </div>
                <div className="col-12 col-md-4 mb-5">
                    <RecentBlog 
                        blogImage={Post2}
                        blogData={'First Time Home Owner Ideas'}
                        BlogAuthor={'by Kriston Watson on Dec 15, 2021'}
                    />
                </div>
                <div className="col-12 col-md-4 mb-5">
                    <RecentBlog 
                        blogImage={Post3}
                        blogData={'First Time Home Owner Ideas'}
                        BlogAuthor={'by Kriston Watson on Dec 12, 2021'}
                    />
                </div>
                <div className="col-12 col-md-4 mb-5">
                    <RecentBlog 
                        blogImage={Post1}
                        blogData={'First Time Home Owner Ideas'}
                        BlogAuthor={'by Kriston Watson on Dec 19, 2021'}
                    />
                </div>
                <div className="col-12 col-md-4 mb-5">
                    <RecentBlog 
                        blogImage={Post2}
                        blogData={'First Time Home Owner Ideas'}
                        BlogAuthor={'by Kriston Watson on Dec 15, 2021'}
                    />
                </div>
                <div className="col-12 col-md-4 mb-5">
                    <RecentBlog 
                        blogImage={Post3}
                        blogData={'First Time Home Owner Ideas'}
                        BlogAuthor={'by Kriston Watson on Dec 12, 2021'}
                    />
                </div>
            </div>
        </div>
        <div className="my-5">
        <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Blog;
