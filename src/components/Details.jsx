import axios from 'axios';
import React, { useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom';

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
    console.log(foods);

  return (
    <div>
        <div>
           <ul>
            {foods.map((item, index) => (
                <div key={index}>
                    <div>
                        <li><img src={item.strMealThumb} alt="/" /></li>
                        <li>{item.strMeal}</li>
                        <li>Area: {item.strArea}</li>
                        <li>Instruction: 
                            <p>{item.strInstructions}</p>
                        </li>
                        <ul>
                            <li>Ingredients:</li>
                            <li>{item.strIngredient1}</li>
                            <li>{item.strIngredient2}</li>
                            <li>{item.strIngredient3}</li>
                            <li>{item.strIngredient4}</li>
                            <li>{item.strIngredient5}</li>
                            <li>{item.strIngredient6}</li>
                            <li>{item.strIngredient7}</li>
                        </ul>
                    </div>                
                </div>
            ))}
           </ul>
        </div>

    </div>
  )
}
