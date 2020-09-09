import React from 'react';
// import getUser from '../../apiCore';

const PxSocialDataUser = props => {
  const userSocialNetwork = props.socialNetwork[0];
  const dataUser = props.socialNetwork[1];

  return (
    <article className={ `socialData ${userSocialNetwork}` }>
      <div className="socialData__topLiner"></div>

      <section className="socialData__socialNetworkUser">
        <img src="" alt="socialIcon" />
        <span>@{ dataUser.userName }</span>
      </section>

      <section className="socialData__followersUser">
        <img src="" alt="socialIcon" />
        <span>{ dataUser.followers }</span>
        <small>follower</small>
      </section>

      <section className="socialData__dataFollowers">
        <span>{ dataUser.followersToday } Today</span>
      </section>
    </article>
  )
}

export default PxSocialDataUser;
