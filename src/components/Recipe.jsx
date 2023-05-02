/* eslint-disable */
import { Rate } from "antd";

const Recipe = ({ recipe }) => {
  const { recipe_name, ingredients, cooking_method, rating } = recipe;
  return (
    <div className="mb-10 text-center">
      <h1 className="text-3xl text-lime-600 font-bold mb-6">{recipe_name}</h1>
      <div>
        <table className="w-full">
          {/* head */}
          <thead className="bg-lime-50 border-b-2 border-lime-200">
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
              <td className="p-3 text-sm text-gray-700 text-start border">
                {ingredients.map((ingredient, index) => (
                  <span key={index}>{ingredient}, </span>
                ))}
              </td>
              <td className="p-3 text-sm text-gray-700 text-start border">
                {cooking_method}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Rate defaultValue={rating} />
        <button className="btn bg-lime-500 hover:bg-lime-600 border-none">
          Add Favourite
        </button>
      </div>
    </div>
  );
};

export default Recipe;
