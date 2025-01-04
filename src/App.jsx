import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const addRecipeToQueue = (recipes) => {
    const isExit = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipes.recipe_id
    );
    if (!isExit) {
      setRecipeQueue([...recipeQueue, recipes]);
    } else {
      alert("Recipe already exists in the queue");
    }
  };

  const handleRemove = (id) => {
    const deleteRecipe = recipeQueue.find((recipes) => recipes.recipe_id === id);

    if (deleteRecipe) {
      const updateQueue = recipeQueue.filter((recipes) => recipes.recipe_id !== id);
      setRecipeQueue(updateQueue);

      setPreparedRecipe([...preparedRecipe, deleteRecipe]);

      // Correctly update total time and calories using previous state
      setTotalTime((prevTime) => prevTime + Number(deleteRecipe.preparing_time));
      setTotalCalories((prevCalories) => prevCalories + Number(deleteRecipe.calories));
    }
  };

  return (
    <div className="container mx-auto px-4">
      <Header />
      <Banner />
      <OurRecipes />
      <section className="flex flex-col md:flex-row gap-6">
        {/* card section */}
        <Recipes addRecipeToQueue={addRecipeToQueue} />

        {/* sidebar */}
        <Sidebar
          recipeQueue={recipeQueue}
          handleRemove={handleRemove}
          preparedRecipe={preparedRecipe}
          totalTime={totalTime}
          totalCalories={totalCalories}
        />
      </section>
    </div>
  );
}

export default App;
