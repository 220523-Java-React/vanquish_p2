import { useLocation } from 'react-router-dom'; 

import HeaderMain from '../components/HeaderMain';
import HeaderPages from '../components/HeaderPages';

export default function Header() {

  const location = useLocation();
  const pageHeader = (location.pathname === '/') ? <HeaderMain /> : <HeaderPages />;

  return (
    <>
      <header>
        {pageHeader}
      </header>
    </>
  );
}