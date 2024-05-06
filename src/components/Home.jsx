import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../store/CartSlice";

const Home = () => {
  const dispatch = useDispatch();
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

  const handleaddproduct=(product)=>{
    dispatch(addCart(product));
  }

  return (
    <div className="pt-20">
      <div>
        <h1 className="text-center text-xl py-3">Welcome to the store</h1>
      </div>

      <div>
        <h1 className="text-center text-xl pt-3 pb-10">Products</h1>
      </div>

      <div className="flex justify-center px-20 pb-32">
        <div className="grid grid-cols-4 gap-20">
          {productData.map((product) => (
            <div key={product.id} className="w-[300px] rounded-md border">
              <div className=" flex justify-center">
                <img
                  src={product.image}
                  className="h-[160px] rounded-md object-cover"
                />
              </div>
              <div className="p-4">
                <h1 className="text-lg font-semibold">${product.price}</h1>
                <p className="mt-3 h-28 text-lg text-gray-700">
                  {product.title}
                </p>

                <button
                onClick={()=>handleaddproduct(product)}
                  type="button"
                  className="mt-3 w-full  rounded-sm bg-black px-2.5 py-1 text-[15px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
