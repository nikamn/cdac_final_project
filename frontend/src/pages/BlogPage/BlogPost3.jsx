import React from 'react';
import BlueberriesImage from "../../assets/blogimages/berry.jpg";

const BlogPost3 = () => {
  return (
    <div className="bg-[#023F3A] min-h-screen">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow-xl sm:rounded-lg p-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">How to Grow Blueberries in Containers</h1>
            <img src={BlueberriesImage} alt="Blueberries in Containers" className="w-30 mb-6 rounded-md" />
            <p className="text-lg text-gray-700 leading-relaxed">
              Growing blueberries in containers is a rewarding way to enjoy fresh, homegrown berries even if you have limited space. 
              Here's a guide to successfully grow blueberries in containers:
            </p>
            <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-2">
              <li className="mb-2">Select a container with good drainage and sufficient depth to accommodate the blueberry roots. A large pot or half-barrel works well.</li>
              <li className="mb-2">Choose a potting mix specifically formulated for acid-loving plants like blueberries. Ensure it is well-draining.</li>
              <li className="mb-2">Place your container in a location that receives full sun for at least 6 hours per day.</li>
              <li className="mb-2">Plant your blueberry bush in the container, making sure to bury it at the same depth as it was in its nursery container.</li>
              <li className="mb-2">Water your blueberry bush regularly, keeping the soil consistently moist but not waterlogged.</li>
              <li className="mb-2">Fertilize your blueberry bush with a balanced fertilizer designed for acid-loving plants, following the package instructions.</li>
              <li className="mb-2">Prune your blueberry bush as needed to remove dead or diseased branches and promote airflow.</li>
              <li className="mb-2">Harvest ripe blueberries as they become ready, typically in late spring or early summer.</li>
            </ol>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              With proper care and attention, your blueberry bush will thrive in its container, providing you with delicious, nutritious berries for years to come.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BlogPost3;
