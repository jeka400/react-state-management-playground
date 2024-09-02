import * as React from 'react';
import { useReducer, useEffect } from 'react';
import { shopReducer, initialState } from './ShopReducer';

const Shop: React.FC = () => {
  const [
    { options, selected, quantity, total, decrementDisabled, incrementDisabled },
    dispatch,
  ] = useReducer(shopReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'init' });
  }, []);

  return (
    <div className="card p-3">
      <div className="row">
        <section className="col-7 mb-3">
          <select
            className="form-select"
            value={ selected }
            onChange={ (e) => dispatch({ type: 'selectItem', id: Number(e.target.value) }) }
          >
            {options.map((option) => (
              <option key={ option.id } value={ option.id } className="d-flex justify-content-between">
                { option.name } <span className="ms-auto">€{ option.value }</span>
              </option>
            ))}
          </select>
        </section>

        <section className="col-3 mb-3">
          <div className="input-group">
            <button
              className="btn btn-outline-secondary"
              disabled={ decrementDisabled }
              onClick={ () => dispatch( { type: 'decrementQuantity' }) }
            >
              -
            </button>
            <input className="form-control text-center" readOnly value={ quantity } />
            <button
              className="btn btn-outline-secondary"
              disabled={ incrementDisabled }
              onClick={ () => dispatch({ type: 'incrementQuantity' }) }
            >
              +
            </button>
          </div>
        </section>

        <section className="col-2 mt-3 text-end">
          <strong>Total: <span className="text-primary">€{ total }</span></strong>
        </section>
      </div>
    </div>
  );
};

export default Shop;