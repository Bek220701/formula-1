import React, { useEffect, useState } from "react";
import { AiOutlineFieldNumber } from "react-icons/ai";

const ToDo = () => {
  const [img, setImg] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const addProduct = () => {
    if (img === "" || productName === "" || price === "") {
      alert("заполните пустые поля!!!");
    } else if (products.some((el) => el.product === productName)) {
      alert("такой продукт уже существует!");
    } else {
      let newProduct = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        url: img,
        product: productName,
        productPrice: price,
      };
      let result = JSON.parse(localStorage.getItem("todo")) || [];
      result.push(newProduct);
      localStorage.setItem("todo", JSON.stringify(result));
      readProduct();
    }
    setImg("");
    setProductName("");
    setPrice("");
  };
  ////////////////
  const readProduct = () => {
    let result = JSON.parse(localStorage.getItem("todo")) || [];
    setProducts(result);
  };
  ////////////////

    const deleteProduct = (btn) => {
      localStorage.setItem(
        "todo",
        JSON.stringify([...products.filter((el) => el.id !== btn)])
      );
      readProduct();
    };

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div className="container flex items-center justify-center flex-col">
      <div className="flex items-center w-[70%] justify-center mx-auto mt-10 flex-col gap-5">
        <input
          value={img}
          onChange={(e) => setImg(e.target.value)}
          type="text"
          placeholder="Your IMG url..."
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <input
          value={productName}
          maxLength={15}
          onChange={(e) => setProductName(e.target.value)}
          type="text"
          placeholder="Product name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          placeholder="Price"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          onClick={addProduct}
          class="relative ml-4 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add Product
          </span>
        </button>
      </div>

      {!products.length ? (
        <div
          class="flex w-[70%] justify-center items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
          role="alert"
        >
          <svg
            class="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">у вас еще нет продуктов!</span>
          </div>
        </div>
      ) : (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-[70%] mt-5">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 text-2xl">
                  <AiOutlineFieldNumber />
                </th>
                <th scope="col" class="px-6 py-3">
                  IMG
                </th>
                <th scope="col" class="px-6 py-3">
                  Product Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.sort((a,b)=>a.price-b.price).map((el, idx) => (
                <tr   class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {idx + 1}
                  </th>
                  <td class="px-6 py-4">
                    <img src={el.url} alt="img" width={50} />
                  </td>
                  <td class="px-6 py-4">{el.product}</td>
                  <td class="px-6 py-4">{el.productPrice}$</td>
                  <td class="px-6 py-4">
                    <button
                      onClick={() => deleteProduct(el.id)}
                      type="button"
                      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ToDo;
