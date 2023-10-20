import Head from 'next/head';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Steven Chen",
  description:
    "Welcome to Steven's Portfolio! Take a journey through my projects, where I demonstrate my expertise in web development, software engineering, and AI & ML. Immerse yourself in innovative solutions, as I combine creativity, technical prowess, and a passion for excellence. Let's connect and explore the possibilities together.",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {/* style */}
      </Head>

      {/* provideres] */}
      {children}
    </>
  );
};

export default RootLayout;