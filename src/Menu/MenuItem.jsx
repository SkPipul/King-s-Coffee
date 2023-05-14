import { Link } from "react-router-dom";

const MenuItem = () => {
  return (
    <section className="">
      <div className="py-20 px-10">
        <h3 className="text-5xl font-extrabold text-center mb-6">
          Our Popular Items of Menu
        </h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <div className="shadow-xl hover:shadow-[#4d3423] transition-all duration-500 rounded-sm">
            <img
              className="rounded-sm w-full"
              src="https://img.freepik.com/free-photo/cup-coffee-with-leaf-design-it_1340-23640.jpg?w=360"
              alt=""
            ></img>
            <div className="px-6 py-6">
              <h4 className="text-2xl font-bold">Cold Brew Coffee</h4>
              <div className="flex items-center gap-3 mt-4 border-b border-gray-400">
                <p className="mb-8">2/3 espresso, 1/3 streamed milk</p>
              </div>
              <div className="mt-6 flex items-center justify-between gap-5">
                <h4 className="text-2xl font-bold text-[#6F4E37]">$20.00</h4>
                <button className="btn bg-[#6F4E37] border-none">
                  Order Now
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-xl hover:shadow-[#4d3423] transition-all duration-500 rounded-sm">
            <img
              className="rounded-sm w-full"
              src="https://media.istockphoto.com/id/1220101964/photo/pouring-coffee-with-smoke-on-a-cup-and-coffee-beans-on-burlap-sack-on-black-background.jpg?s=612x612&w=0&k=20&c=uR1oUz1TyGj9cjmXM-kwsPCLwCFznEyvqs1yqS8fGvI="
              alt=""
            ></img>
            <div className="px-6 py-6">
              <h4 className="text-2xl font-bold">Cold Brew Coffee</h4>
              <div className="flex items-center gap-3 mt-4 border-b border-gray-400">
                <p className="mb-8">2/3 espresso, 1/3 streamed milk</p>
              </div>
              <div className="mt-6 flex items-center justify-between gap-5">
                <h4 className="text-2xl font-bold text-[#6F4E37]">$25.00</h4>
                <button className="btn bg-[#6F4E37] border-none">
                  Order Now
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-xl hover:shadow-[#4d3423] transition-all duration-500 rounded-sm">
            <img
              className="rounded-sm w-full"
              src="https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/Facts-on-caffeine-resized.jpg"
              alt=""
            ></img>
            <div className="px-6 py-6">
              <h4 className="text-2xl font-bold">Cold Brew Coffee</h4>
              <div className="flex items-center gap-3 mt-4 border-b border-gray-400">
                <p className="mb-8">2/3 espresso, 1/3 streamed milk</p>
              </div>
              <div className="mt-6 flex items-center justify-between gap-5">
                <h4 className="text-2xl font-bold text-[#6F4E37]">$18.00</h4>
                <button className="btn bg-[#6F4E37] border-none">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link to={"/menu"}><button className="btn bg-amber-800 border-none">See More</button></Link>
        </div>
      </div>
    </section>
  );
};

export default MenuItem;
