import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: auto;
  padding: 20px 0px;

  @media (max-width: 480px) {
    padding-top: 70px;
    width: 100%;
  }
`;
