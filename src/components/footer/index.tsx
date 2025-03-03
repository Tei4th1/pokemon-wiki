import Link from 'next/link';
import styled from 'styled-components';

const Text = styled.h3`
  font-family: karla;
  color: #212121;
  font-weight: 700;
  font-size: 17px;
`;
const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem 3rem;
  background-color: transparent;
  z-index: 10;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;
const GithubLink = styled.a`
  font-family: karla;
  color: #212121;
  font-weight: 700;
  font-size: 17px;
  text-decoration: none;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Text>Make with ❤️</Text>
      <Link href="https://github.com/Tei4th1/pokemon-wiki" legacyBehavior>
        <GithubLink target="_blank" rel="noopener noreferrer">
          Github
        </GithubLink>
      </Link>
    </FooterContainer>
  );
}
