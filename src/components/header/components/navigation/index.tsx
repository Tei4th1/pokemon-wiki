'use client';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  font-family: karla;
  color: #212121;
  font-weight: 400;
  font-size: 25px;
  text-decoration: none;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    font-weight: 700;
  }
  @media (max-width: 490px) {
    font-size: 28px;
  }
`;

interface NavigationProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Navigation({
  href,
  children,
  onClick,
}: NavigationProps) {
  return (
    <Link href={href} passHref>
      <StyledLink onClick={onClick}>{children}</StyledLink>
    </Link>
  );
}
