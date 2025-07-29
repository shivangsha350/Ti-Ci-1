import React from "react";
import BlogCard from "./BlogCard";
import { blogs } from "./blogData";

const BlogList = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-20">
      <h2 className="text-3xl font-bold mb-6">Our Blogs</h2>
       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div> 
    </div>
  );
};

export default BlogList;
