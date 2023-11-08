import { useEffect, useState } from "react";

const Trending = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const fetchedData = await response.json();
    setData(fetchedData);
    setLoading(false);
    console.log("data from useEffect hook ", fetchedData);
  }

  // useEffect(() => {
  //   fetchData();
  //   console.log("fetching data... ");
  // }, []);

  const handleClik = () => {
    setTimeout(() => {
      fetchData();
    }, 3000 );
    setLoading(true);
  };

  return (
    <div className="mt-20 h-screen">
      <h1 className="text-2xl font-black text-blue-900 mt-7">
        Trending Products
      </h1>
      <button
        className="p-6 px-10 text-white bg-orange-500"
        onClick={handleClik}
      >
        Click me
      </button>

      {loading ? (
        <p className="p-3 text-orange-500 mt-5 border border-1 border-orange-500 bg-orange-100 text-lg font-semibold">
          {" "}
          Loading data ....{" "}
        </p>
      ) : (
        <div>
          {data.map((item) => {
            return (
              <>
                <p key={item.id}> {item.category}</p>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Trending;
