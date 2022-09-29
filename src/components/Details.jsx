import axios from 'axios';
import React, { useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom';
import {Navbar} from './Navbar'

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
              
    <div  className='w-full bg-white py-16 px-4'>

            {foods.map((item, index) => (
                <div key={index}>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                {/* <img src={item.strMealThumb} alt="/"  className='w-[500px] mx-auto my-4'/>
                <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold '>{item.strArea}</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>{item.strMeal}</h1>
                        {/* <li>Area: </li>
                        <li>Instruction: 
                            <p>{item.strInstructions}</p>
                        </li>
                        <ul>
                            <li>Ingredients</li>
                            <li>{item.strIngredient1}</li>
                            <li>{item.strIngredient2}</li>
                            <li>{item.strIngredient3}</li>
                            <li>{item.strIngredient4}</li>
                            <li>{item.strIngredient5}</li>
                            <li>{item.strIngredient6}</li>
                            <li>{item.strIngredient7}</li>
                        </ul> */}
                        {/* </div> */}
       
  <img className='w-[500px] mx-auto my-4' src={item.strMealThumb} alt='/' />
  <div className='flex flex-col justify-center'>
    <p className='text-[#00df9a] font-bold '>{item.strArea}</p>
    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
      molestiae delectus culpa hic assumenda, voluptate reprehenderit
      dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
      eveniet ex deserunt fuga?
    </p>
    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
  </div>
</div>
</div>
  ))}
                </div>
    //     </div>
    // </div>



  )
}
