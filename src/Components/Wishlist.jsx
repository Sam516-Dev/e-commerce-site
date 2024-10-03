import React from "react";

const Wishlist = () => {
  const sampleItems = [
    { id: 1, name: "Product 1", price: "$50" },
    { id: 2, name: "Product 2", price: "$30" },
    { id: 3, name: "Product 3", price: "$20" },
  ];

  return (
    <div className="h-screen bg-blue-50 p-10">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-10">
        Your Wishlist
      </h1>

      {sampleItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-700 mb-2">
                {item.name}
              </h2>
              <p className="text-lg text-blue-600">{item.price}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 text-xl">
          Your wishlist is empty. Start adding your favorite items!
        </div>
      )}
    </div>
  );
};

export default Wishlist;
