// eslint-disable-next-line react/prop-types
const Sidebar = ({ recipeQueue, handleRemove, preparedRecipe, calculateTimeCalories, totalTime, totalCalories }) => {
  return (
    <div className="md:w-1/3 border-2 rounded-xl text-gray-600 p-2 bg-base-100 ">
      {/* cook table */}
      <div className="overflow-x-auto">
        <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center p-4 rounded-md">
          Want to cook: {recipeQueue.length}
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipes, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{recipes.recipe_name}</td>
                <td>{recipes.preparing_time}</td>
                <td>{recipes.calories}</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemove(recipes.recipe_id);
                      calculateTimeCalories(recipes.preparing_time, recipes.calories);
                    }}
                    className="btn bg-green-400 rounded-full text-gray-800 mt-2 font-medium px-2 py-1 md:px-6"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Currently Cooking table */}
      <div className="overflow-x-auto mt-8 ">
        <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center p-4 rounded-md">
          Currently Cooking: {preparedRecipe.length}
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {preparedRecipe.map((recipes, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{recipes.recipe_name}</td>
                <td>{recipes.preparing_time}</td>
                <td>{recipes.calories}</td>
              </tr>
            ))}
            <tr className="border-none">
              <th></th>
              <th></th>
              <td className="text-lg font-semibold">Total Time = {totalTime} minutes</td>
              <td className="text-lg font-semibold">Total Calories = {totalCalories} kcal</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
