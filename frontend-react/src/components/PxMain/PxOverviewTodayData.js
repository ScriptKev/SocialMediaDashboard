import React from 'react';

const PxOverviewTodayData = props => {
  const userSocialNetwork = props.socialNetwork[0];
  // const dataUser = props.socialNetwork[1];

  return (
    <article className={ `overview ${userSocialNetwork}` }>
      <section className="overview__pageView">
        <span>Page Views</span>
        <img src="" alt="socialIcon" />
      </section>

      <section className="overview__data">
        <h4>112</h4>
        <span>303%</span>
      </section>
    </article>
  )
}

export default PxOverviewTodayData;
