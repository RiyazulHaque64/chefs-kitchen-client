import { TbChefHat } from "react-icons/tb";
import { GiCampCookingPot, GiRoyalLove } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi2";

const Stat = () => {
    return (<div className="stat-bg grid lg:grid-cols-4 gap-10 py-14 px-10 rounded-lg">
        <div className="bg-lime-200 rounded-lg p-6 flex items-center justify-between shadow-xl">
            <div>
                <h2 className="text-lg">Total Chef</h2>
                <p className="text-3xl font-extrabold text-indigo-600">102</p>
                <p className="text-[12px]">8% More than last month</p>
            </div>
            <TbChefHat className="w-12 h-12 text-indigo-600" />
        </div>
        <div className="bg-lime-200 rounded-lg p-6 flex items-center justify-between shadow-xl">
            <div>
                <h2 className="text-lg">Total Recipe</h2>
                <p className="text-3xl font-extrabold text-yellow-600">895</p>
                <p className="text-[12px]">18% More than last month</p>
            </div>
            <GiCampCookingPot className="w-12 h-12 text-yellow-600" />
        </div>
        <div className="bg-lime-200 rounded-lg p-6 flex items-center justify-between shadow-xl">
            <div>
                <h2 className="text-lg">Favourite Recipe</h2>
                <p className="text-3xl font-extrabold text-red-600">478</p>
                <p className="text-[12px]">21% More than last month</p>
            </div>
            <GiRoyalLove className="w-12 h-12 text-red-600" />
        </div>
        <div className="bg-lime-200 rounded-lg p-6 flex items-center justify-between shadow-xl">
            <div>
                <h2 className="text-lg">Happy Clients</h2>
                <p className="text-3xl font-extrabold text-lime-600">1902</p>
                <p className="text-[12px]">19% More than last month</p>
            </div>
            <HiUserGroup className="w-12 h-12 text-lime-600" />
        </div>
    </div>)
}
export default Stat;