import { useLoaderData } from 'react-router';
import Receipe from '../Receipe/Receipe';

const ChefRecipe = () => {
    const data = useLoaderData();
    const { image_url, name, description, num_recipes, experience_years, likes, recipes} = data;
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image_url} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <div className=''>
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <div className='flex mt-5 space-x-3'>
                                <span className="badge badge-lg px-3 py-3">Experience {experience_years} Yrs</span>
                                <span className="badge badge-lg px-3 py-3 badge-primary">Recepies {num_recipes} </span>
                                <div className="badge badge-lg px-3 py-3 badge-secondary flex items-center space-x-1">
                                    <img src="https://i.ibb.co/JpCz807/heart-1.png" className='w-4 h-4' />
                                    <span>{likes}</span>
                                </div>
                            </div>
                        </div>
                        <p className="py-6 font-semibold">{description}</p>


                    </div>
                </div>
            </div>

            <div className='text-center text-5xl my-10 font-semibold text-black'>Food Receipes</div>

            <div className='md:flex items-baseline justify-around space-y-5 my-10'>
                {
                    recipes.map((receipe, index)=> <Receipe key={index} value={receipe} no={index}></Receipe>)
                }
            </div>
            

        </div>
    );
};

export default ChefRecipe;