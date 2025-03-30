import styled from 'styled-components';
import Image from 'next/image';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  right: 0px;
  overflow: hidden;
`;

const StyledImage = styled(Image)<{
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
}>`
  position: absolute;
  top: ${({ $top }) => $top || 'auto'};
  left: ${({ $left }) => $left || 'auto'};
  right: ${({ $right }) => $right || 'auto'};
  bottom: ${({ $bottom }) => $bottom || 'auto'};
`;

export default function ImageSet() {
  return (
    <ImageContainer>
      <StyledImage
        src="/clouds.png"
        width={680}
        height={430}
        alt="Clouds"
        $top="20px"
        $left="120px"
      />

      <StyledImage
        src="/black-ball.png"
        width={170}
        height={170}
        alt="black-ball"
        $top="90px"
        $left="80px"
      />

      <StyledImage
        src="/pikachu.png"
        width={547}
        height={547}
        alt="pikachu"
        $top="80px"
        $left="100px"
      />

      <StyledImage
        src="/red-ball.png"
        width={275}
        height={276}
        alt="standart-pokeball"
        $top="160px"
        $left="616px"
      />
    </ImageContainer>
  );
}
