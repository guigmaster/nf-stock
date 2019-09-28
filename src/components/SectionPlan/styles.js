import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  display: block;
  padding: 20px;
  min-height: 150px;
  background-color: #f5f6fd;
`;

export const Container = styled.div`
  display: flex;
  max-width: 1440px;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  color: #515c65;
`;

export const Subtitle = styled.h2`
  text-align: center;
  margin-top: 5px;
  font-size: 20px;
  font-weight: 300;
  color: #515c65;
`;

export const Plans = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  align-items: center;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
