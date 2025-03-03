import styled from 'styled-components';

export const Background = styled.div<{ bgcolor: string }>`
  display: flex;
  background: ${({ bgcolor }) => bgcolor};
  width: 100%;
  height: 100vh;
`;
