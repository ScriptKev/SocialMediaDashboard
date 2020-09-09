import React from 'react';
import user from '../../assets/data/user'
import PxSocialDataUser from './PxSocialDataUser';
import PxOverviewTodayData from './PxOverviewTodayData';

const PxMainSocialData = () => {
  return (
    <main className="mainSocialData">
      <div className="mainSocialData__container">
        {
          Object.entries(user).map((socialNetwork, index) =>
            <PxSocialDataUser key={index} socialNetwork={socialNetwork}/>
          )
        }
      </div>

      <section className="overviewData">
        <h2>Overview - Today</h2>

        <div className="overview__container">
          {
            Object.entries(user).map((socialNetwork, index) =>
              <PxOverviewTodayData key={index} socialNetwork={socialNetwork}/>
            )
          }
        </div>
      </section>
    </main>
  )
}

export default PxMainSocialData;