import * as React from 'react';
import { useState } from 'react';
import User from './UserProfile';

const ShowHideUser: React.FC<{ show: boolean }> = ({ show }) => (show ? <User /> : null);

const ShowUser: React.FC = () => {
  const [show, setShow] = useState(false);
  
  return (
    <div className="card p-4 shadow-sm">
      <button className="btn btn-primary mb-3" onClick={ () => setShow(!show) }>
        {show ? "Hide User" : "Show User"}
      </button>
      <ShowHideUser show={ show } />
    </div>
  );
}

export default ShowUser;
