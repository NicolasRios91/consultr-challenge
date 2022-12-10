import { Container, LabelsContainer } from "./styles";

export const Card = ({ character }) => {
  const { name, images, appearance } = character;

  return (
    <Container>
      <img src={images.sm} alt={name} />
      <LabelsContainer>
        <p>{name || "Unknown"}</p>
        <p>Height: {appearance.height[1] || "Unknown"}</p>
        <p>Weight: {appearance.weight[1] || "Unknown"}</p>
      </LabelsContainer>
    </Container>
  );
};
