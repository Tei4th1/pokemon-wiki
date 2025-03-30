'use client';

import { Background } from '@/components/background';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { MainPage } from '@/components/main-page';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <Background bgcolor="linear-gradient(to bottom, #f5db13, #f2b807)">
        <MainPage />
      </Background>
      <Footer />
    </>
  );
}
