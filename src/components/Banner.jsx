import banImg from "../assets/banner.png"

const Banner = () => {
  return (
    <div className="py-20 bg-cover bg-no-repeat rounded-3xl md:w-full h-full md:h-[35,5rem] mb-10" style={{
        backgroundImage:`url(${banImg})`
    }}>
    <div className="w-9/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-6 py-4">
    <h1 className="font-bold text-white md:text-[3.25rem]">Discover an exceptional cooking class tailored for you ! </h1>
    <p className="text-lg text-white font-normal">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
    <div className="flex gap-4 text-xl font-semibold">
<button className="btn bg-green-400 rounded-full border-none">Explore Now</button>
<button className="btn bg-transparent  border-2 text-white hover:bg-green-400 rounded-full">Our Feedback</button>

    </div>
    </div>
    </div>
  )
}

export default Banner
