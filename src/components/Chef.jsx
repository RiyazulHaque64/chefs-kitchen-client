/* eslint-disable */
import { BiLike } from "react-icons/bi";
import { Link } from "react-router-dom";

const Chef = ({ data }) => {
  const { id, chef_image, name, experience, recipies, likes } = data;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-96 w-full" src={chef_image} alt="Chef Picture" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          <span className="font-bold">Experience:</span> {experience} Years in
          this field
        </p>
        <div className="flex items-center justify-between mb-10">
          <p>
            <span className="font-bold">Number of recipies: </span>
            {recipies.length}
          </p>
          <p className="flex items-center justify-end gap-2">
            <BiLike />
            <span>{likes}</span>
          </p>
        </div>
        <div className="card-actions w-full">
          <Link className="w-full" to={`chef/${id}`}>
            <button className="btn bg-lime-500 hover:bg-lime-600 border-none w-full">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
