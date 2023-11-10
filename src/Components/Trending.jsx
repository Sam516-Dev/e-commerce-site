import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Trending = () => {
  const [data, setData] = useState([]);

  // const [loading, setLoading] = useState(false);

  async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products");
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
    <div className="mt-20 h-screen">
      <h1 className="text-2xl font-black text-blue-900 mt-7">
        Trending Products
      </h1>

      <div>
        {data.map((item) => (


          <div key={item.id} className=" w-52 h-96 border-2 border-blue-500">

            <img src={item.image} alt="" className=" w-48 h-48 object-cover" />
            <label> {item.category}</label>
            <h3> {item.title}</h3>
            <p> {item.rating.rate}</p>
            <p>{item.price}</p>
            <div>
              <AiOutlineShoppingCart />
              <button> Add To Cart </button>
            </div>

          </div>


        ))}
      </div>
    </div>
  );
};

export default Trending;
