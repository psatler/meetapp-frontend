import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  section {
    margin-bottom: 50px;

    strong {
      font-size: 2rem;
      color: white;
      margin-left: 5px;
    }
  }

  @media only screen and (max-width: 768px) {
    max-width: 700px;
  }

  @media only screen and (max-width: 425px) {
    max-width: 400px;

    section {
      margin-bottom: 20px;

      strong {
        font-size: 1rem;
      }
    }
  }

  @media only screen and (max-width: 375px) {
    max-width: 350px;
  }

  @media only screen and (max-width: 320px) {
    max-width: 310px;
  }
`;
