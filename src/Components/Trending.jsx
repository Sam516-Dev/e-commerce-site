import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import TrendingCard from "./TrendingCard";

const Trending = () => {
  const [data, setData] = useState([]);

  // const [loading, setLoading] = useState(false);

  async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products?limit=12");
    const fetchedData = await response.json();
    setData(fetchedData);
    // setLoading(false);
    console.log("data from useEffect hook ", fetchedData);
  }

  useEffect(() => {
    fetchData();
    console.log("fetching data... ");
  }, []);

  return (
    <div className="mt-20  mx-32">
      <h1 className="text-2xl font-black mb-5 text-blue-900 mt-7">
        Trending Products
      </h1>

      <div className="grid  grid-cols-3 gap-6">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <TrendingCard item={item} />
            </div>
          ))
        ) : (
          <div className="bg-orange-500 py-4 rounded-md p-1 col-span-3 text-white font-bold text-center">
            <svg
              className="animate-spin h-8 w-12 mx-auto mb-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v2m0 6V4m0 10v2m-6-6h2m6 0h2m-6 6h2m6 0h2M4 12h2m2 0h10m2 0h2"
              ></path>
            </svg>
            Loading data...
          </div>
        )}
      </div>
    </div>
  );
};

export default Trending;
