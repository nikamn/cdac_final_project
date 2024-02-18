import React from 'react';
import FengShuiImage from "../../assets/blogimages/fugi.jpg";

const BlogPost1 = () => {
  return (
    <div className=" bg-[#023F3A] min-h-screen">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow-xl sm:rounded-lg p-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Feng Shui Plants for Better Health</h1>
            <img src={FengShuiImage} alt="Feng Shui Plants" className="w-30 mb-6 rounded-md" />
            <p className="text-lg text-gray-700 leading-relaxed">
              Feng Shui plants are known for their ability to bring positive energy and harmony into a space. Incorporating these plants into your home not only adds beauty but also enhances the overall well-being of the occupants.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Some popular Feng Shui plants include:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-2">
              <li>Money Plant: Symbolizes wealth and prosperity.</li>
              <li>Lucky Bamboo: Attracts good fortune and positive energy.</li>
              <li>Peace Lily: Purifies the air and promotes tranquility.</li>
              <li>Jade Plant: Represents growth and prosperity.</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              By strategically placing these plants in different areas of your home, you can create a harmonious environment that supports health, wealth, and happiness.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BlogPost1;
