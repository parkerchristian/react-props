import React from 'react';
import PropTypes from 'prop-types';

function Dog({ name, age, weight }) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>Age</dt>
      <dd>{age}</dd>
      
      <dt>Weight</dt>
      <dd>{weight}</dd>
    </dl>
  );
}

// {weight && <dt>Weight</dt>
/* <dd>{weight}</dd>} removes it from being displayed*/

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.string.isRequired
};

export default Dog;
