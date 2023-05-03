/* eslint-disable */
import { BiLike } from "react-icons/bi";
import Recipe from "./Recipe";
import LazyLoad from "react-lazy-load";

const ChefDetailsBanner = ({ chefRecepes }) => {
  const {
    id,
    chef_image,
    name,
    chef_description,
    experience,
    recipies,
    likes,
  } = chefRecepes;
  return (
    <div>
      <LazyLoad>
        <div className="flex lg:grid flex-col-reverse lg:grid-cols-8 items-center justify-between gap-8 lg:gap-14 bg-lime-50 rounded-xl shadow mb-20">
          <div className="col-span-4 p-10">
            <h2 className="text-3xl lg:text-5xl mb-8">{name}</h2>
            <p className="lg:w-10/12 mb-6 text-sm lg:text-base">
              {chef_description}
            </p>
            <p className="mb-6">
              <span className="font-bold">Experience:</span> {experience} Years
              in this field
            </p>
            <div className="flex items-center justify-between lg:w-1/2 mb-10">
              <p>
                <span className="font-bold">Number of recipies: </span>
                {recipies.length}
              </p>
              <p className="flex items-center lg:justify-end gap-2">
                <BiLike />
                <span>{likes}</span>
              </p>
            </div>
          </div>
          <div className="col-span-4 flex justify-end">
            <img
              className="w-auto lg:h-[600px] rounded-t-lg lg:rounded-r-lg"
              src={chef_image}
              alt="Air Conditioner Illustration"
            />
          </div>
        </div>
      </LazyLoad>
      <div>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2 relative before:duration-500 before:mt-6 before:absolute before:content-[''] before:top-full before:left-1/2 before:w-[6%] before:h-[2px] before:ml-[-3%] before:bg-lime-600 hover:before:w-[24%] lg:hover:before:w-[18%] hover:before:ml-[-12%] lg:hover:before:ml-[-9%] before:z-50 after:mt-6 after:absolute after:content-[''] after:top-full after:left-1/2 after:w-[24%] lg:after:w-[18%] after:h-[2px] after:ml-[-12%] lg:after:ml-[-9%] after:bg-gray-200">
            {name}'s Recipes
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipies.map((recipe) => (
            <Recipe key={recipe.recipe_id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetailsBanner;
