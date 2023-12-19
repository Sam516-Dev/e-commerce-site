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
        {data.map((item) => (
         
          <div>
            {data ? <TrendingCard item={item} /> : <div>loading data... </div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
