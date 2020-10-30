const Header = () => {
  return (
    <div className="flex justify-center border-b-2 border-gray-400 py-2 px-2">
      <h1 className="font-semibold text-3xl text-pink-600">
        Food-O-Meter
      </h1>
    </div>
  );
};

const meals = [
  { meal: "Pasta Carbonara", servings: 1, weight: 0, calories: 570 },
  { meal: "Cesar Salad", servings: 2, weight: 0, calories: 90 },
  { meal: "Tsar Burger", servings: 1, weight: 0, calories: 680 },
  { meal: "Blackberry", servings: 0, weight: 200, calories: 80 },
];

const Summary = (props) => {
  const date = new Date().toLocaleDateString();
  return (
    <div className="flex justify-between mt-4 px-1 font-bold text-2xl text-gray-600">
      <p>{date}</p>
      <p>{props.total} cal</p>
    </div>
  );
};

const Meal = (props) => {
  const amount =
    props.weight > 0
      ? `${props.weight} g`
      : props.servings > 1
      ? `${props.servings} servings`
      : 0;
  return (
    <div className="flex justify-between my-3 px-2 py-1 rounded-md border-2 border-pink-500 shadow-md">
      <div>
        <span className="font-semibold capitalize text-gray-800 pr-3">
          {props.meal}
        </span>
        {amount.length > 0 && (
          <span className="font-semibold lowercase text-xs text-gray-700 text-right">
            {amount}
          </span>
        )}
      </div>
      <p className="font-semibold lowercase text-sm text-gray-800 text-right">
        {props.calories} cal
      </p>
    </div>
  );
};

const App = () => {
  return (
    <div className="max-w-2xl mx-auto px-2 bg-gray-100 h-screen">
      <div className="flex flex-col justify-between h-full">
        <Header />
        <Summary total={meals.reduce((a, c) => a + c.calories, 0)} />
        <div className="flex-grow flex flex-col justify-between ">
          <div className="my-2">
            {meals.map((meal) => (
              <Meal {...meal} />
            ))}
          </div>
          <div className="my-1 w-full">
            <input
              className="shadow-md appearance-none border-2 border-gray-400 w-full rounded-full py-2 px-3 text-gray-800 my-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Start typing for suggestions"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
