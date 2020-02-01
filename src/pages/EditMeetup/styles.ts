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
`;
