'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const BackgroundError = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  background-color: #d93e30;
`;
const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 3rem;
`;

const StyledImage = styled(Image)`
  max-width: 100%;
  height: auto;
  z-index: 2;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    z-index: 10;
  }
`;
const ErrorNumber = styled.h1`
  font-family: karla;
  font-size: 600px;
  z-index: 1;
  position: absolute;
  font-weight: 700;
  margin: 0;
  color: rgba(0, 0, 0, 0.5);
`;
const ErrorText = styled.h3<{ color: string }>`
  font-family: karla;
  font-size: 42px;
  color: ${(props) => props.color};
  font-weight: 700;
`;
const ErrorTextContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 20px;
  position: relative;
  z-index: 10;
`;
const ReturnBtn = styled.a`
  background-color: #f2cb07;
  padding: 20px 80px;
  font-family: karla;
  font-size: 23px;
  font-weight: 700;
  color: #212121;
  border-radius: 10px;
  box-shadow: 0 0 -15px 0 #ed6743;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: #e0b806;
  }
`;
export default function NotFound() {
  return (
    <BackgroundError>
      <Rocket>
        <ErrorNumber>404</ErrorNumber>
        <StyledImage
          src="/teamRocket.png"
          alt="rocket team"
          width={500}
          height={500}
        />
      </Rocket>
      <ErrorTextContainer>
        <ErrorText color="white">The rocket team</ErrorText>
        <ErrorText color="black">has won this time</ErrorText>
      </ErrorTextContainer>
      <BtnContainer>
        <Link href="/" passHref>
          <ReturnBtn>Return</ReturnBtn>
        </Link>
      </BtnContainer>
    </BackgroundError>
  );
}
