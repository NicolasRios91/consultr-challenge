import { Container, LabelsContainer } from "./styles";

//todo shadow styles for image
export const Card = ({ character }) => {
  const { name, images, appearance } = character;

  return (
    <Container>
      <img src={images.sm} alt={name} />
      <LabelsContainer>
        <p>{name}</p>
        <p>Height: {appearance.height[1]}</p>
        <p>Weight: {appearance.weight[1]}</p>
      </LabelsContainer>
    </Container>
  );
};
