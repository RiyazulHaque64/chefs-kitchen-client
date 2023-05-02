import { useLoaderData } from "react-router-dom";
import ChefDetailsBanner from "../components/ChefDetailsBanner";

const ChefRecepes = () => {
  const chefRecepes = useLoaderData();
  return (
    <div>
      <ChefDetailsBanner chefRecepes={chefRecepes} />
    </div>
  );
};

export default ChefRecepes;
