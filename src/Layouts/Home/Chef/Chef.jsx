import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
const Chef = ({value}) => {
    const {id, image_url, name, experience_years, num_recipes, likes} = value;
    console.log(image_url)
    return (
        <div>
            <div className='w-3/4 my-10 md:mx-4 mx-auto'>
                <div className="card md:w-96 w-64 bg-base-100 shadow-xl">
                    <LazyLoad className='h-72' offset={300} threshold={0.95}>
                        <figure><img className='md:h-72 h-60 w-full rounded-tr-lg rounded-tl-lg' src={image_url} alt="Shoes" /></figure>
                    </LazyLoad>

                    <div className="card-body">
                        <h2 className="card-title flex justify-between">
                            {name}
                            <div className="badge badge-secondary flex items-center space-x-1">
                                <img src="https://i.ibb.co/JpCz807/heart-1.png" className='w-4 h-4' />
                                <span>{likes}</span>
                            </div>
                        </h2>
                        <div className="text-lg">
                            <h3>Experience: {experience_years} yrs</h3>
                            <h3>Receipes: {num_recipes}</h3>
                        </div>
                        <Link to={`/recipe/${id}`} className='btn w-full mt-5'>View Receipe</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;