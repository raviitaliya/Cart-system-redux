import { useEffect, useState } from "react";

const Home = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-center text-xl py-3">Welcome to the store</h1>
      </div>

      <div className="flex-wrap w-full">
        {productData.map((product) => (
          <div
            key={product.id}
            className="relative h-[400px] w-[300px] rounded-md"
          >
            <img
              src={product.image}
              className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
              <h1 className="text-lg font-semibold text-white">{product.title}</h1>
              {/* <p className="mt-2 text-sm text-gray-300">
                {product.description}
              </p> */}
              <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                View Profile →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
