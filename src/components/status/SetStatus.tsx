import * as React from 'react';
import { useContext } from 'react';
import { StatusContext } from './StatusContextProvider';

const SetStatus: React.FC = () => {
  const context = useContext(StatusContext);

  if (!context) {
    throw new Error("SetStatus must be used within a StatusContextProvider");
  }

  const [status, setStatus] = context;

  return (
    <div className="card p-3 mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter new status"
        value={ status }
        onChange={ (e) => setStatus(e.target.value) }
      />
    </div>
  );
};

export default SetStatus;
