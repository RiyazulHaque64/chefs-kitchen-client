import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Chef from "../components/Chef";
import HireChef from "../components/HireChef";

const Home = () => {
  const chefData = useLoaderData();
  return (
    <div>
      <Banner />
      <div>
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-2 relative before:duration-500 before:mt-6 before:absolute before:content-[''] before:top-full before:left-1/2 before:w-[6%] before:h-[2px] before:ml-[-3%] before:bg-lime-600 hover:before:w-[24%] lg:hover:before:w-[18%] hover:before:ml-[-12%] lg:hover:before:ml-[-9%] before:z-50 after:mt-6 after:absolute after:content-[''] after:top-full after:left-1/2 after:w-[24%] lg:after:w-[18%] after:h-[2px] after:ml-[-12%] lg:after:ml-[-9%] after:bg-gray-200">
            Available Chef
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {chefData.map((chef) => (
            <Chef key={chef.id} data={chef} />
          ))}
        </div>
      </div>
      <div className="py-10 my-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2 relative before:duration-500 before:mt-6 before:absolute before:content-[''] before:top-full before:left-1/2 before:w-[6%] before:h-[2px] before:ml-[-3%] before:bg-lime-600 hover:before:w-[24%] lg:hover:before:w-[18%] hover:before:ml-[-12%] lg:hover:before:ml-[-9%] before:z-50 after:mt-6 after:absolute after:content-[''] after:top-full after:left-1/2 after:w-[24%] lg:after:w-[18%] after:h-[2px] after:ml-[-12%] lg:after:ml-[-9%] after:bg-gray-200">
            Hire Chef
          </h2>
        </div>
        <HireChef />
      </div>
    </div>
  );
};

export default Home;
