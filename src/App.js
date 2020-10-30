const Header = () => {
  return (
    <div className="flex justify-center border-b-2 border-gray-400 py-2 px-2">
      <h1 className="uppercase font-semibold text-3xl text-pink-600">
        Food-O-Meter
      </h1>
    </div>
  );
};

const meals = [
  { meal: "Pasta Carbonara", servings: 1, weght: 0, calories: 570 },
  { meal: "Cesar Salad", servings: 1, weght: 0, calories: 90 },
  { meal: "Tsar Burger", servings: 1, weght: 0, calories: 680 },
  { meal: "Blackberry", servings: 0, weght: 200, calories: 80 },
];

const Meal = (props) => {
  return (
    <div className="my-3 px-1 py-1 font-semibold capitalize rounded-md border-2 text-gray-800 border-pink-500">
      {props.meal}
    </div>
  );
};

const App = () => {
  return (
    <div className="max-w-2xl mx-auto px-2 bg-gray-100 h-screen">
      <div className="flex flex-col justify-between h-full">
        <Header />
        <div className="flex-grow flex flex-col justify-between ">
          <div className="">
            {meals.map(meal => <Meal {...meal}/>)}
          </div>
          <div className="w-full">
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
