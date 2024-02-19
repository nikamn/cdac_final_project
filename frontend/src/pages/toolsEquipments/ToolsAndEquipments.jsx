import React from 'react';

const ToolsAndEquipments = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">Tools and Equipment</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Tool/Equipment Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-70 object-cover object-center" src="https://organicbazar.net/cdn/shop/products/High-Pressure-Garden-Spray-Pump-2-Liter-2.jpg?v=1694168068&width=360" alt="Tool 1" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Tool 1</h2>
              <p className="text-black">High Pressure Garden Spray Pump </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-black">$50</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Add to Cart</button>
              </div>
              </div>
          </div>
          {/* Tool/Equipment Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-70 object-cover object-center" src="https://organicbazar.net/cdn/shop/products/Gloves-Orange-Black-color.jpg?v=1694167564&width=360" alt="Tool 2" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Tool 2</h2>
              <p className="text-black">Gardening Gloves for Men and Women</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-black">$40</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Add to Cart</button>
              </div>
            </div>
          </div>
          {/* Tool/Equipment Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-70 object-cover object-center" src="https://organicbazar.net/cdn/shop/products/purple-Multipurpose-Gardening-Cutter-Scissor-Hand-Pruner-5.jpg?v=1694167834&width=493" alt="Tool 3" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Tool 3</h2>
              <p className="text-black">Multipurpose Gardening Cutter Scissor</p>
                      
            <div className="flex justify-between items-center mt-4">
                <span className="text-black">$60</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Add to Cart</button>
              </div>
          </div>
          </div> 
          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default ToolsAndEquipments;
