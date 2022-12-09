import { useEffect, useState } from "react";
import "./App.css";
import { getHeroes } from "./api";
import { addHeroes } from "./features/heroes";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [errorState, setErrorState] = useState({ hasError: false });
  const [loading, setLoading] = useState(true);
  const data = useSelector((state) => state.heroes.data);
  const dispatch = useDispatch();

  const handleError = (error) => {
    setErrorState({ hasError: true, message: error.message });
  };

  useEffect(() => {
    getHeroes()
      .then((response) => dispatch(addHeroes(response)))
      .catch(handleError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  if (errorState.hasError) return <div>{errorState.message};</div>;

  return data?.length > 1 ? (
    <div className="App">Heroes added</div>
  ) : (
    <div className="App">List is empty</div>
  );
}

export default App;
