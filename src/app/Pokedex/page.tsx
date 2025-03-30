'use client';
import Footer from '@/components/footer';
import Header from '@/components/header';
import PokemonTable from '@/components/pokemon-desk/components/pokemon-table';
import styled from 'styled-components';

export default function Pokedex() {
  const PageContainer = styled.div`
    padding: 2rem;
    min-height: 100vh;
  `;

  const Title = styled.h1`
    font-family: 'Karla', sans-serif;
    color: #212121;
    text-align: center;
    margin-bottom: 2rem;
  `;
  return (
    <div>
      <Header />
      <PageContainer>
        <PokemonTable />
      </PageContainer>
      <Footer />
    </div>
  );
}
