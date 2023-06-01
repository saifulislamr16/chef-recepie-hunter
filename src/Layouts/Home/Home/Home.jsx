import { HeartIcon, LinkIcon } from '@heroicons/react/24/solid'
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className={`bg-cover bg-image md:h-[90vh] h-[50vh] rounded-lg my-10 md:mx-4 mx-2`}>
                <div className='rounded-lg flex items-center justify-center text-white bg-gradient-to-r from-orange-800/70 md:h-[90vh] h-[50vh] p-5'>
                    <div >
                        <h1 className=' text-5xl md:text-7xl font-semibold'> Welcome</h1>
                        <h1 className=' text-5xl md:text-7xl font-semibold'> To </h1>
                        <h1 className='text-sky-600 text-5xl md:text-7xl font-semibold'>Chef Hunter</h1>
                        <p className='mt-10 text-2xl'>The place where you can find the top Receipes <br /> by top Chefs of the world </p>
                        <p className='mt-10 text-2xl'>Have a tour! </p>
                    </div>
                </div>
            </div>

            <div className='text-center text-5xl my-10 font-semibold text-black'>Food Receipes</div>

            <div className='md:grid md:grid-cols-3 md:gap-3'>
                <div className='w-3/4 my-10 md:mx-4 mx-2'>
                    <div className="card md:w-96 w-64 bg-base-100 shadow-xl">
                        <figure><img className='md:h-72 h-60 w-full' src="https://i.ibb.co/pydqzXB/pexels-2102934.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title flex justify-between">
                                John Doe
                                <div className="badge badge-secondary flex items-center space-x-1">
                                    <img src="https://i.ibb.co/JpCz807/heart-1.png" className='w-4 h-4' />
                                    <span>500</span>
                                </div>
                            </h2>
                            <div className="text-lg">
                                <h3>Experience: 5 yrs</h3>
                                <h3>Receipes: 5</h3>
                            </div>
                            <button className='btn w-full mt-5'>View Receipe</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;