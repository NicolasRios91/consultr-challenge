import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  img {
    filter: brightness(65%);
    border-radius: inherit;
  }
`;

export const LabelsContainer = styled.div`
  position: absolute;
  bottom: 0;
  color: #ffffff;
  padding: 16px;
  font-family: "system-ui";

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
