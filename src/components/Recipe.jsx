/* eslint-disable */
import { Rate } from "antd";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipe = ({ recipe }) => {
  const [favourite, setFavourite] = useState(false);
  const { recipe_name, ingredients, cooking_method, rating } = recipe;
  const handleFavourite = () => {
    setFavourite(true);
    toast.success("Added to favourites list", {
      position: "top-center",
      autoClose: 3000,
    });
  };
  return (
    <div className="mb-10 text-center flex flex-col shadow p-6">
      <h1 className="text-3xl text-lime-600 font-bold mb-6">{recipe_name}</h1>
      <div className="flex-grow">
        <table className="w-full">
          {/* head */}
          <thead className="bg-lime-50 border-2 border-lime-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide">
                Ingredients
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide">
                Cooking Method
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="p-3 text-sm text-gray-700 text-start border border-lime-200">
                {ingredients.map((ingredient, index) => (
                  <span key={index}>{ingredient}, </span>
                ))}
              </td>
              <td className="p-3 text-sm text-gray-700 text-start border border-lime-200">
                {cooking_method}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Rate defaultValue={rating} />
        <button
          onClick={handleFavourite}
          className="btn bg-lime-500 hover:bg-lime-600 border-none"
          disabled={favourite ? true : false}
        >
          Add Favourite
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Recipe;
