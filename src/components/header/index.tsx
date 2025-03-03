'use client';
import styled from 'styled-components';
import Navigation from './components/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5db13;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
`;

const NavigationContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: #f5db13
    padding: 20px;
    border-radius: 0 0 20px 20px;
    z-index: 20;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 0.3s ease;

    @media (max-width: 768px) {
      display: flex;
      gap: 15px;
    }
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: none;
  z-index: 30;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuLogo = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 20px;
  }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Link href="/" passHref>
        <Image
          src="/pokemon-logo.svg"
          alt="Logo"
          width={150}
          height={63}
          priority
          style={{ cursor: 'pointer' }}
        />
      </Link>
      <IconButton onClick={toggleMenu}>
        <Image
          src={isOpen ? '/close-icon.png' : '/burger-icon.png'}
          alt={isOpen ? 'Close Menu' : 'Open Menu'}
          width={30}
          height={30}
        />
      </IconButton>
      <Overlay isOpen={isOpen} onClick={toggleMenu} />
      <NavigationContainer isOpen={isOpen}>
        <MenuLogo>
          <Image
            src="/pokemon-logo.svg"
            alt="Menu Logo"
            width={150}
            height={63}
          />
        </MenuLogo>
        <Navigation href="/" onClick={toggleMenu}>
          Home
        </Navigation>
        <Navigation href="/pokedex" onClick={toggleMenu}>
          Pokédex
        </Navigation>
        <Navigation href="/legendaries" onClick={toggleMenu}>
          Legendaries
        </Navigation>
        <Navigation href="/compare" onClick={toggleMenu}>
          Compare
        </Navigation>
      </NavigationContainer>
    </HeaderContainer>
  );
}
