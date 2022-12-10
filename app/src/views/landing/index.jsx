import { useEffect, useState } from "react";
import { getHeroes } from "../../api";
import { addHeroes } from "../../features/heroes";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/card";
import { Header } from "../../components/header";
import { CardsContainer } from "./styles";

export const App = () => {
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
    <>
      <Header />
      <CardsContainer>
        {data.slice(0, 10).map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </CardsContainer>
    </>
  ) : (
    <div>List is empty</div>
  );
};
