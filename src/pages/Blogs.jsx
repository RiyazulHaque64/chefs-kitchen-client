import { useLoaderData } from "react-router-dom";
import Blog from "../components/Blog";

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <div>
      <div className="w-10/12 mx-auto py-20">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
