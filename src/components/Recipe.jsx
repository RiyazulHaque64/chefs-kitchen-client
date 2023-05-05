/* eslint-disable */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rate } from "antd";
import { useState } from "react";

const Recipe2 = ({ recipe, recipeImg }) => {
  const [favourite, setFavourite] = useState(false);
  const { recipe_name, recipe_image, ingredients, cooking_method, rating } =
    recipe;
  const [cookingMethod, setCookingMethod] = useState(true);

  const handleFavourite = () => {
    setFavourite(true);
    toast.success("Added to favourites list", {
      position: "top-center",
      autoClose: 3000,
    });
  };
  return (
    <div className="border border-gray-300 shadow-lg flex flex-col">
      <img src={recipe_image} alt="Recipe Image" />
      <h2 className="text-xl font-bold mb-2 pl-4 pr-4">{recipe_name}</h2>
      <p className="text-sm mb-2 pl-4 pr-4">
        <span className="font-semibold">Ingredients: </span>
        {ingredients.map((ingredient, index) => (
          <span key={index}>{ingredient}, </span>
        ))}
      </p>
      <p className="text-sm pl-4 pr-4 flex-grow">
        <span className="font-semibold">Cooking Method: </span>
        {cookingMethod ? (
          <span>{cooking_method.substring(0, 100)}</span>
        ) : (
          <span>{cooking_method}</span>
        )}
        <span
          className="text-lime-600 hover:underline ml-1 cursor-pointer"
          onClick={() => setCookingMethod(!cookingMethod)}
        >
          {cookingMethod ? "Read More" : "See Less"}
        </span>
      </p>
      <div className="flex justify-between items-center mt-6 pl-4 pr-4 pb-6">
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

export default Recipe2;
