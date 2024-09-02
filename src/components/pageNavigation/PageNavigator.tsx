import * as React from 'react';
import { useState } from 'react';
import { Page1, Page2, Page3 } from './Pages';

interface IChoosePageProps {
  page: number;
}

const ChoosenPage: React.FC<IChoosePageProps> = ({ page }) => {
  const Page = [Page1, Page2, Page3][page];
  return <Page />;
};

const ChoosePage: React.FC = () => {
  const [page, setPage] = useState(0);

  return (
    <div className="card p-3 shadow-sm">
      <ChoosenPage page={ page } />

      <div className="mt-3">
        <button className="btn btn-outline-primary me-2" onClick={ () => setPage(0) } disabled={ page === 0 }>
          Page 1
        </button>
        <button className="btn btn-outline-primary me-2" onClick={ () => setPage(1) } disabled={ page === 1 }>
          Page 2
        </button>
        <button className="btn btn-outline-primary" onClick={ () => setPage(2) } disabled={ page === 2 }>
          Page 3
        </button>
      </div>
    </div>
  );
};

export default ChoosePage;
