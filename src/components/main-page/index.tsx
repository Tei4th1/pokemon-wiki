import { styled } from 'styled-components';
import ImageSet from './components/image-container';
import { Subtitle } from './components/subtitle';
import { Title } from './components/title';
import { GreenButton } from './components/green-button';
import Link from 'next/link';

const TextContainer = styled.div`
  margin-top: 128px;
  margin-left: 150px;
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
`;

export function MainPage() {
  return (
    <>
      <TextContainer>
        <Title>
          Find <span className="bold">all your favorite</span> pokemon
        </Title>
        <Subtitle>
          You can know the type of Pokemon, its strengths, disadvantages and
          abilities
        </Subtitle>
        <GreenButton> See Pokemon</GreenButton>
      </TextContainer>
      <ImageSet />
    </>
  );
}
