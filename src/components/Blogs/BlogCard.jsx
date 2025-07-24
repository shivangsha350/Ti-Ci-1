import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
    return (
        <Link to={`/blog/${blog.id}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                    <p className="text-gray-600 text-sm">{blog.description}</p>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
