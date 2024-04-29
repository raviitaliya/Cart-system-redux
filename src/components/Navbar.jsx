import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex w-full h-20 justify-between px-10 border-b-2 border-gray-300">
        <div className="text-3xl flex items-center">
            Cart System
        </div>

        <div className="flex items-center gap-10 text-lg">
            <Link >Home</Link>
            <Link>Cart</Link>
            <span>cart item:0</span>
        </div>

    </div>
  )
}

export default Navbar