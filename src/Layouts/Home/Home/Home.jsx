
import { useLoaderData } from 'react-router';
import Chef from '../Chef/Chef';
import './Home.css'
const Home = () => {
    const chefs = useLoaderData();
    return (
        <div>
            <div className={`bg-cover bg-image md:h-[90vh] h-[50vh] rounded-lg my-10 md:mx-4 mx-2`}>
                <div className='rounded-lg flex items-center justify-center text-white bg-gradient-to-r from-orange-800/70 md:h-[90vh] h-[50vh] p-8'>
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
            <div className='md:grid md:grid-cols-3 md:gap-3 w-11/12 mx-auto'>
                {
                    chefs.map(chef => <Chef
                        key={chef.id}
                        value={chef}
                    ></Chef>)
                }
            </div>



            <div className="carousel w-11/12 md:h-[700px] mx-auto my-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/r03sH1M/slide1.jpg" className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/VCsWKQx/slide2.jpg" className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/zGyDckJ/slide3.jpg" className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>


            </div>

            <div className='text-center text-5xl my-10 font-semibold text-black'>Food News</div>

            <div className='w-full flex justify-center my-10'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    {/* <label>
                                    <input type="checkbox" className="checkbox" />
                                </label> */}
                                </th>
                                <th>Author</th>
                                <th>Title</th>
                                <th>Release</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td className='font-semibold'>
                                    Jhon Doe
                                    <br />

                                    <span className="badge badge-ghost badge-sm">Reporter</span>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://static.toiimg.com/thumb/100630334.cms?width=680&height=512&imgsize=39404" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">What is white jamun, and why is it a must-have in summer</div>
                                            <div className="text-sm opacity-50">TIMESOFINDIA.COM</div>
                                        </div>
                                    </div>
                                </td>
                                <td>Jun 1, 2023</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs"><a target="_blank" href="https://timesofindia.indiatimes.com/life-style/food-news/what-is-white-jamun-and-why-is-it-a-must-have-in-summer/photostory/100630320.cms">details</a></button>
                                </th>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td className='font-semibold'>
                                    Nusrath Jahan
                                    <br />

                                    <span className="badge badge-ghost badge-sm">Writer</span>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://tds-images.thedailystar.net/sites/default/files/styles/medium_205/public/images/2023/03/20/bread_pudding.png?itok=mtbF2l9-&timestamp=1679306109" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Experience a fusion of flavours at Boro's</div>
                                            <div className="text-sm opacity-50">The Daily Star</div>
                                        </div>
                                    </div>
                                </td>
                                <td>Mar 22, 2023</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs"><a target="_blank" href="https://timesofindia.indiatimes.com/life-style/food-news/what-is-white-jamun-and-why-is-it-a-must-have-in-summer/photostory/100630320.cms">details</a></button>
                                </th>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td className='font-semibold'>
                                    Jhon Doe
                                    <br />

                                    <span className="badge badge-ghost badge-sm">Reporter</span>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://static.toiimg.com/thumb/msid-83848108,width-1280,resizemode-4/83848108.jpg" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">What is Black Diamond Apple, its benefits and why it is so costly</div>
                                            <div className="text-sm opacity-50">TIMESOFINDIA.COM</div>
                                        </div>
                                    </div>
                                </td>
                                <td>May 30, 2023</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs"><a target="_blank" href="https://timesofindia.indiatimes.com/life-style/food-news/what-is-black-diamond-apple-its-benefits-and-why-it-is-so-costly/photostory/100623263.cms">details</a></button>
                                </th>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default Home;