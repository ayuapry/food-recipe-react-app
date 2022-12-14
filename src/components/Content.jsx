import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Search } from './Search'

export const Content = () => {
const [foods, setFoods] = useState([]);
const navigate = useNavigate();
const [search, setSearch] = useState('')

let food = JSON.parse(JSON.stringify(foods))
if (search) {
  food = foods.filter(meal => meal.strMeal.toLowerCase().includes(search.toLowerCase()))
}


const getData = async () => {
    try{
        const item = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php/filter?f=b")
        setFoods(item.data.meals);
    }catch (error) {
        console.log(error);
    }
};

//filter type
const filterType = async (category) => {
    try {
      const item = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category);
      setFoods(item.data.meals);
    } catch (error) {
      console.log(error);
    }
};

const onChange = (event) => {
    let input = event.target.value
    setSearch(input)
}

useEffect(() => {
    getData();
}, []);

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 '>
        <h1 className='text-orange-600 font-bold text-4xl text-center '>Top Rated Menu Items</h1>
        {/* FilterRow */}
        <div className='flex flex-col lg:flex-row justify-between '>
            {/* filter type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap '>
                    <button onClick={() => getData()} 
                        className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>
                        All
                    </button>
                    <button onClick={() => filterType('Dessert')} 
                        className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>
                        Dessert
                    </button>
                    <button onClick={() => filterType('Chicken')} 
                        className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>
                        Chicken
                    </button>
                </div>
            </div>           
        {/* Search Bar */}
        <div>
            <div className='flex justify-between max-w-[390px] w-full'>
                <Search onChange={onChange} />
            </div></div>
        </div>
        
        {/* display foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 '>
            {food && food.map((item, index) => (
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer' onClick={() => navigate(`/details/${item.idMeal}`)}>
                    <img src={item.strMealThumb} alt={item.strMeal} 
                    className='w-full h-[200px] object-cover rounded-t-lg '  />
                    <div className='flex justify-between px-2 py-4 '>
                        <p className='font-bold'>{item.strMeal}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
