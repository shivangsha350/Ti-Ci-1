import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "./blogData";

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id.toString() === id);

    if (!blog) return <div className="p-6">Blog not found.</div>;

    return (
        <div className="max-w-3xl mx-auto p-6 mt-20">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-6" />
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-700 text-lg">{blog.content}</p>
        </div>
    );
};

export default BlogDetail;
