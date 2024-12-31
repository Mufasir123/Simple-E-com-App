import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true)
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        setData(result.products);
        setFilteredData(result.products);
        setLoading(false)
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter the data based on the search query
    const filtered = data.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="bg-[#e5e5e5]">
      <div className=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="bg-black mt-10 w-full h-12 flex items-center  rounded-lg">
          <input
            type="search"
            placeholder="Search Items"
            className="rounded-md h-8 w-60 pl-10 pb-1  ml-5"
            value={searchQuery}
            onChange={handleSearch}
          />
          <FaSearch className="bg-white absolute ml-8" />
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:grid-cols-3">


          {loading ? (
            <div className="bg-[#14213d] rounded-lg flex justify-center items-center gap-1 my-5 mx-5 w-full h-50">
              <p className="text-[#ffffff] text-2xl p-5">Loading....</p>
            </div>
          ):(
            filteredData.length === 0 ? (
              <div className="bg-[#14213d] rounded-lg flex justify-center items-center gap-1 my-5 mx-5 w-full h-50">
                <p className="text-[#ffffff] text-2xl">No Items Found</p>
              </div>
            ):(
              filteredData.map((product) => (
                <div
                  key={product.id}
                  className="bg-[#14213d] rounded-lg p-4 flex flex-col items-center w-50 h-90 gap-1 my-5 mx-5 w-80"
                >
                  <img
                    alt={product.title}
                    src={product.thumbnail}
                    className="aspect-square w-30 rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                  />
                  <h3 className="mt-4 text-md font-bold  text-[#ffffff]">
                    {product.title}
                  </h3>
                  <p className="mt-4 text-md text-[#f8f9fa]">
                    {product.description}
                  </p>
                  <p className="mt-1 text-lg font-medium text-[#f8f9fa]">
                    Price:${product.price}
                  </p>
                  <button
                    className="bg-[#ffffff] rounded-md w-full h-10 font-medium"
                    onClick={() => addToCart(product)}
                  >
                    Add Cart
                  </button>
                </div>
              ))
            )
            )
          }
          
        </div>
      </div>
    </div>
  );
};

export default Home;
