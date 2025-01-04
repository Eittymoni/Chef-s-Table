import { useEffect } from "react"
import { useState } from "react"


// eslint-disable-next-line react/prop-types
const Recipes = ({addRecipeToQueue}) => {
    const [recipes, setRecipes] = useState([])

    useEffect(() =>{
        fetch('./recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])
   
  return (
    <div className="md:w-2/3">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {
        recipes.map( recipes =>(
          
            <div key={recipes.recipe_id} className="card bg-base-100 border-2">
            <figure>
              <img className="w-full md:h-52 rounded-xl"
                src={recipes.recipe_image}
                alt="recipe img " />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl text-gray-800 font-bold"> {recipes.recipe_name}</h2>
              <p className="text-base text-gray-600">{recipes.short_description}</p>
              <h3 className="text-lg text-gray-800 font-medium">Ingredients: {recipes.ingredients.length}</h3>
              <ul className="ml-8">
            {recipes.ingredients.map((item,index) =>(
                <li className="list-disc text-gray-600" key={index}>{item}

                </li>
            ))}
              </ul>
            <div className="flex gap-4">
            <div className="flex items-center">
            <i className="fa-regular fa-clock mr-2 text-2xl"></i>
            <p>{recipes.preparing_time} min</p>
            </div>
            <div className="flex items-center">
            <i className="fa-solid fa-fire-flame-curved mr-2 text-2xl"></i>
            <p>{recipes.calories} calories</p>
            </div>
            </div>

              <div className="card-actions ">
                <button onClick={() =>addRecipeToQueue(recipes)} className="btn bg-green-400 rounded-full px-8 text-gray-800 mt-6 font-medium">Want to Cook</button>
              </div>
            </div>
          </div>
               
            
        )) }
    </div>
    </div>
  )
}

export default Recipes
