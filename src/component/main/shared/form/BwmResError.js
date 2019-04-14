import React from 'react';

export function BwmResError(props) {
  const errors = props.errors;
  return (
    errors.length > 0 &&
      <div className="boxfalse" style={{ display: 'block' }}>
        {errors.map((error, index) => <p key={index}> {error.detail} </p>)}
      </div>
  )
}
