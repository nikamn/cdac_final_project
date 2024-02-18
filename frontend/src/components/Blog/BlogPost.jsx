import React from "react";
import blogData from "../../data/blogData";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogData[id - 1];

  return (
    <div className="bg-[#023F3A] min-h-screen">
      <article className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow-xl sm:rounded-lg p-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              {post.title}
            </h1>
            <img
              src={post.image}
              alt="Blueberries in Containers"
              className="w-30 mb-6 rounded-md"
            />
            {post.content.map((section, index) => (
              <React.Fragment key={index}>
                {section.type === "paragraph" && (
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    {section.text}
                  </p>
                )}
                {section.type === "list" && (
                  <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="mb-2">
                        {item}
                      </li>
                    ))}
                  </ol>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
