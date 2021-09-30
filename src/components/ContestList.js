import React from 'react';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';

const ContestList = ({ contests }) => (
  <div className="ContestList">
    {contests.map((contest) => (
      <ContestPreview key={contest.id} {...contest} />
    ))}
  </div>
);

ContestList.propTypes = {
  contests: PropTypes.array,
};

export default ContestList;
