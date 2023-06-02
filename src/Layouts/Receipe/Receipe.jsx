import ReactStarsRating from 'react-awesome-stars-rating';

const Receipe = ({ value, no }) => {
    const { cooking_method, ingredients, name, rating } = value
    return (
        <div>
            <div className='md:grid grid-cols-3 w-10/12 mx-auto'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body ">
                        <div className='border-b-2 pb-2 space-y-1'>
                            <h2 className="card-title flex w-full justify-between  text-3xl">
                                <span className='text-rose-500'>{name}</span>
                                <div className="badge badge-lg badge-accent">{no+1}</div>
                            </h2>
                            
                            <ReactStarsRating className='flex space-x-1' value={Math.round(rating)}></ReactStarsRating>
                        </div>
                        <div className="w-full justify-between border-b-2 pb-4  my-2">
                            <h1 className='mb-3 text-lg font-semibold w-fit text-blue-700'>Ingradients : </h1>
                            <div>
                                {
                                    ingredients.map((ingradient, index) =>
                                        <p className='block font-normal' key={index}><span className=' font-semibold'>{index + 1}.</span> {ingradient}</p>
                                    )
                                }
                            </div>
                        </div>

                        <div className="w-full justify-between border-b-2 pb-2  my-2 ">
                            <h1 className='mb-3 text-lg font-semibold w-fit text-blue-700'>Cooking Method : </h1>
                            <div className='space-y-2.5'>
                                {
                                    cooking_method.map((ingradient, index) =>
                                        <p className='block font-normal' key={index}><span className=' font-semibold'>{index + 1}.</span> {ingradient}</p>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Receipe;