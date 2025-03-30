import { styled } from 'styled-components';

interface PowerTypeProps {
  value: string;
}

const PowersProp = styled.div`
  font-weight: 400;
  font-family: karla;
  font-size: 15px;
  text-align: center;
`;

export const PowerType: React.FC<PowerTypeProps> = ({ value }) => (
  <PowersProp>{value}</PowersProp>
);
