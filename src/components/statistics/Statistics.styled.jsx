import styled from 'styled-components';

export const StatisticsWrapper = styled.section``;

export const List = styled.ul`
  list-style: none;
  width: 300px;
  margin: 0 auto;
`;

export const Item = styled.li`
  font-family: monospace;
  & + & {
    margin-top: 10px;
  }
  font-size: 20px;
`;
