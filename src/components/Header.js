import { useLocation } from 'react-router-dom'; 

import HeaderMain from '../components/HeaderMain';

export default function Header() {

  const location = useLocation();
  const pageHeader = (location.pathname === '/') ? <HeaderMain /> : 'other page';

  return (
    <>
      <header>
        {pageHeader}
      </header>
    </>
  );
}