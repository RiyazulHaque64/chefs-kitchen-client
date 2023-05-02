import bannerImg from "../assets/image/banner_image.png";
const Banner = () => {
  return (
    <div className="flex lg:grid flex-col-reverse lg:grid-cols-8 items-center justify-between gap-8 lg:gap-14 py-8 lg:py-16">
      <div className="col-span-4">
        <h2 className="text-3xl lg:text-5xl mb-5">
          Food is not just eating <br />
          <span className="text-black font-bold">energy.</span> It&apos;s an{" "}
          <br />
          <span className="text-lime-600 font-bold">experience</span>
        </h2>
        <p className="lg:w-10/12 mb-6 text-sm lg:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quae
          deserunt blanditiis, perspiciatis repellendus nihil, recusandae
          deleniti facere quam dolores, vel quas quaerat tempora totam molestiae
          doloremque! Asperiores.
        </p>
        <button className="bg-lime-50 shadow-lg px-5 py-3 rounded">
          View Recipies
        </button>
      </div>
      <div className="col-span-4">
        <img
          className="w-full"
          src={bannerImg}
          alt="Air Conditioner Illustration"
        />
      </div>
    </div>
  );
};

export default Banner;
