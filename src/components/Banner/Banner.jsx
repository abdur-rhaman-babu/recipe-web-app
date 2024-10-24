import background from '../../assets/image/banner.jpg'
const Banner = () => {
    return (
        <div className="relative -z-40 mt-16 bg-cover bg-center flex flex-col gap-4 justify-center text-center" style={{backgroundImage:`url(${background})`}}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className='relative z-10 w-full md:w-2/3 mx-auto'>
            <h1 className='md:text-6xl text-4xl font-bold text-center text-white mt-16'>Discover an exceptional cooking class tailored for you!</h1>
            <p className='md:text-xl text-sm font-semibold text-white my-8'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className='flex items-center gap-4 justify-center mb-16'>
                <button className='py-3 px-5 bg-green-400 rounded-badge font-semibold'>Explore Now</button>
                <button className='py-3 px-5 border border-white text-white rounded-badge font-semibold'>Our Feedback</button>
            </div>
            </div>
        </div>
    );
};

export default Banner;