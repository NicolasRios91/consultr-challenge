import { useEffect, useState } from "react";
import { getHeroes } from "../../api";
import { addHeroes } from "../../features/heroes";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/card";
import { Header } from "../../components/header";
import { CardsContainer } from "./styles";
import { StyledButton } from "../../components/button/styles";

export const App = () => {
  const [errorState, setErrorState] = useState({ hasError: false });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const data = useSelector((state) => state.heroes.data);
  const dispatch = useDispatch();

  const handleError = (error) => {
    setErrorState({ hasError: true, message: error.message });
  };

  const handleNextPage = () => {
    setPage((previous) => previous + 1);
  };

  const handlePreviousPage = () => {
    setPage((previous) => previous - 1);
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
        {data.slice((page - 1) * 10, page * 10).map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </CardsContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          padding: "20px",
        }}
      >
        <StyledButton onClick={handlePreviousPage} disabled={page === 1}>
          Prev
        </StyledButton>
        {page}
        <StyledButton onClick={handleNextPage} disabled={page === data.length}>
          Next
        </StyledButton>
      </div>
    </>
  ) : (
    <div>List is empty</div>
  );
};
