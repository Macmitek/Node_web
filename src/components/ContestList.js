import React from 'react';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';
const ContestList = ({ contests, onContestClick }) => (
  <div className="ContestList">
    {contests.map((contest) => (
      <ContestPreview key={contest.id} onClick={onContestClick} {...contest} />
    ))}
  </div>
);

ContestList.propTypes = {
  contests: PropTypes.array,
  onContestClick: PropTypes.func.isRequired,
};

export default ContestList;
