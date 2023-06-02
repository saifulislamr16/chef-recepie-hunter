import { createRef } from "react";
import Pdf from "react-to-pdf";

const Blog = () => {
    const ref = createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [7.5,14]
    };
    return (
        <div className=''>
            <div className=" md:overflow-x-auto mx-auto my-10">
                <table className="md:table mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className=""></th>
                            <th className='text-red-600 text-lg border-2 p-2'>Question</th>
                            <th className='text-green-600 flex justify-between items-center text-lg border-2  p-2'>
                                <span>Ans</span>
                                <Pdf targetRef={ref} filename="che-hunter-blog.pdf" options={options} y={0.2} x={0.2} scale={1}>
                                    {({ toPdf }) => <button onClick={toPdf} className='hidden md:block btn btn-outline btn-secondary'>Download PDF</button>}
                                </Pdf>
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody className='font-semibold'>
                        {/* row 1 */}
                        <tr className="hover">
                            <th className="border-2 p-2">1</th>
                            <td className="border-2 p-2">Tell us the differences between <br /> uncontrolled and controlled components.</td>
                            <td className="border-2 p-2">In React, controlled components refer to components that have their state and behavior controlled <br /> by the parent component. These components rely on props passed down from the parent component <br /> to update their state and behavior. <br /><br />Uncontrolled components refer to components that manage their own state internally.</td>
                        </tr>

                        <tr className="hover">
                            <th className="border-2 p-2">2</th>
                            <td className="border-2 p-2">How to validate React props using PropTypes</td>
                            <td className="border-2 p-2">Step 1: Install PropTypes <br /> Step 2: Import PropTypes <br /> Step 3: Define propTypes <br />Step 4: Use the component with props</td>
                        </tr>

                        <tr className="hover">
                            <th className="border-2 p-2">3</th>
                            <td className="border-2 p-2">Tell us the difference between nodejs and express js.</td>
                            <td className="border-2 p-2">NodeJS is the package, which provides the JavaScript run-time environment,<br /> whereas Express is a framework that sits on top of NodeJS <br /> and helps us to handle requests and responses
                            </td>
                        </tr>

                        <tr className="hover">
                            <th className="border-2 p-2">4</th>
                            <td className="border-2 p-2">What is a custom hook, and why will you create a custom hook?</td>
                            <td className="border-2 p-2">Custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.<br /><br />Benifits of custom Hook:<br />1.Hooks allow function components to have access to state and other React features<br />2.Allow us to encapsulate complex logic and functionality into a single function,<br /> making it easier to understand and reason about.<br />3.Custom hooks allow you to extract and reuse<br /> stateful logic in a more modular and reusable manner
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Blog;