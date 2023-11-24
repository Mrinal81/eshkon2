import { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header className='content'>
        <nav className='container'>
          <ul className='unlist'>
            <li>
              <Link
                href='/'
                className='link'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/posts'
                className='link'
              >
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className='container'>{children}</main>
    </>
  );
}

export default Layout;