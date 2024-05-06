import { useSelector } from "react-redux"

const Cart = () => {

    const product = useSelector(state => state.cart)
  return (
    <div className="pt-20">
        <div>
            <h1 className="text-center text-xl py-3">Cart items</h1>
            <div className="flex justify-center px-20 pb-32">
        <div className="grid grid-cols-4 gap-20">
          {product.map((product) => (
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
                  type="button"
                  className="mt-3 w-full  rounded-sm bg-black px-2.5 py-1 text-[15px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                 Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
    </div>
  )
}

export default Cart