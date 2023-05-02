/* eslint-disable */
import { BiLike } from "react-icons/bi";

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
      <div className="flex lg:grid flex-col-reverse lg:grid-cols-8 items-center justify-between gap-8 lg:gap-14 bg-lime-50 rounded-xl shadow">
        <div className="col-span-4 p-10">
          <h2 className="text-3xl lg:text-5xl mb-8">{name}</h2>
          <p className="lg:w-10/12 mb-6 text-sm lg:text-base">
            {chef_description}
          </p>
          <p className="mb-6">
            <span className="font-bold">Experience:</span> {experience} Years in
            this field
          </p>
          <div className="flex items-center justify-between w-1/2 mb-10">
            <p>
              <span className="font-bold">Number of recipies: </span>
              {recipies.length}
            </p>
            <p className="flex items-center justify-end gap-2">
              <BiLike />
              <span>{likes}</span>
            </p>
          </div>
        </div>
        <div className="col-span-4 flex justify-end">
          <img
            className="w-auto h-[600px] rounded-r-lg"
            src={chef_image}
            alt="Air Conditioner Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default ChefDetailsBanner;
