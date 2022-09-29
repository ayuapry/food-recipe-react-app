import axios from 'axios';
import React, { useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom';
import {Navbar} from './Navbar'
import {Footer} from './Footer'

export const Details = () => {
    const [foods, setFoods] = useState([]);
    const {id} = useParams();

    const getData = async () => {
        try{
            const item = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            setFoods(item.data.meals);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

  return (
    <div>
        <Navbar />          
    <div  className='w-full bg-white py-16 px-4 '>
        {foods.map((item, index) => (
        <div key={index}>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 mt-5'>
            <div>
                <img className='w-[500px] mx-auto my-4' src={item.strMealThumb} alt='/' />
                {/* <Link to="/" className=' bg-black text-white w-[200px] rounded-md font-medium mx-auto md:mx-0 py-3 text-center'>Back To Menu</Link> */}
            </div>

            <div className='flex flex-col justify-center mt-5'>
            <p className='text-[#00df9a] font-bold '>{item.strArea}</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>{item.strMeal}</h1>
            <span className='font-bold'>Ingrediengts : </span>
                <li>{item.strIngredient1}</li>
                <li>{item.strIngredient2}</li>
                <li>{item.strIngredient3}</li>
                <li>{item.strIngredient4}</li>
                <li>{item.strIngredient5}</li>
                <li>{item.strIngredient6}</li>
                <li>{item.strIngredient7}</li>
            <p><br />
                <span className='font-bold'>Instruction :</span><br />
                {item.strInstructions}
            </p>
        </div>
    </div>
    </div>
    ))}
    </div>
    <Footer />
    </div>




  )
}
