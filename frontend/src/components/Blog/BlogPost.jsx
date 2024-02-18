import React from 'react';
import blogData from "../../data/blogData.json"; // Assuming you've saved the JSON data in a file named blogData.json

const BlogPost3 = () => {
  return (
    <div className="bg-[#023F3A] min-h-screen">    
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow-xl sm:rounded-lg p-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">{blogData.title}</h1>
            <img src={blogData.image} alt="Blueberries in Containers" className="w-30 mb-6 rounded-md" />
            {blogData.content.map((section, index) => (
              <React.Fragment key={index}>
                {section.type === 'paragraph' && (
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">{section.text}</p>
                )}
                {section.type === 'list' && (
                  <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="mb-2">{item}</li>
                    ))}
                  </ol>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default BlogPost3;
