'use client';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  font-family: karla;
  color: #212121;
  font-weight: 400;
  font-size: 25px;
  text-decoration: none;
`;

export default function Navigation({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
}
