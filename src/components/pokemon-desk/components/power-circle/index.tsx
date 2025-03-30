import { styled } from 'styled-components';

interface PowerCircleProps {
  value: number;
}
const Circle = styled.div`
  width: 50px;
  height: 50px;
  background: none;
  border-radius: 50%;
  border: 3px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
const Powers = styled.h3`
  font-weight: 400;
  font-family: karla;
  font-size: 15px;
  margin: 0;
`;

export const PowerCircle: React.FC<PowerCircleProps> = ({ value }) => (
  <Circle>
    <Powers>{value}</Powers>
  </Circle>
);
