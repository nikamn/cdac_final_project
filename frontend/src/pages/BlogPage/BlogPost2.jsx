import React from 'react';
import BoneMealImage from "../../assets/blogimages/bone.jpg";

const BlogPost2 = () => {
  return (
    <div className="bg-[#023F3A] min-h-screen">
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow-xl sm:rounded-lg p-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">How to Use Bone Meal in Potted Plants</h1>
            <img src={BoneMealImage} alt="Bone Meal in Potted Plants" className="w-30 mb-6 rounded-md" />
            <p className="text-lg text-gray-700 leading-relaxed">
              Bone meal is a valuable organic fertilizer that provides essential nutrients to potted plants, promoting healthy growth and vibrant blooms. 
              Here's how you can use bone meal effectively in your potted plants:
            </p>
            <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-2">
              <li className="mb-2">Choose the right type of bone meal for your plants. There are different formulations available, such as powdered or granular bone meal.</li>
              <li className="mb-2">Prepare the soil by loosening it and removing any weeds or debris.</li>
              <li className="mb-2">Mix the bone meal into the soil according to the package instructions. Avoid direct contact with plant roots to prevent burning.</li>
              <li className="mb-2">Water the plants thoroughly after applying bone meal to help it integrate into the soil.</li>
              <li className="mb-2">Monitor the growth of your potted plants and reapply bone meal as needed, typically every few months during the growing season.</li>
            </ol>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              With proper use of bone meal, your potted plants will thrive and reward you with lush foliage and beautiful flowers.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BlogPost2;
