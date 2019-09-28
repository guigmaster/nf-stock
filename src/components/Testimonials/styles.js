import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  display: block;
  padding: 20px 0 50px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  color: #515c65;
  margin-bottom: 20px;
`;

export const List = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
