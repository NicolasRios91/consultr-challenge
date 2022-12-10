import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  :before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 160px;
    height: 160px;
    border-radius: 8px;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5) 50%,
      black
    );
  }

  img {
    z-index: -1;
    border-radius: inherit;
  }
`;

export const LabelsContainer = styled.div`
  position: absolute;
  bottom: 0;
  color: #ffffff;
  padding: 16px;
  font-family: "system-ui";
  font-weight: 100;

  p {
    margin: 0;

    :first-child {
      font-weight: bold;
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    font-size: 14px;

    p {
      :first-child {
        font-size: 16px;
      }
    }
  }
`;
