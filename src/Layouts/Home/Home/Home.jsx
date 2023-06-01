import React from 'react';
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

            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;