import React from 'react';

const PxHeader = () => {
  return (
    <header className="header">
      <div className="header__container">
        <section className="header__title">
          <h1>Social Media Dashboard</h1>
          <span>Total Followers: 23,004</span>
        </section>

        <section className="header__toogleMode">
          <span>Dark Mode</span>
          <input type="checkbox" />
        </section>
      </div>
    </header>
  )
}

export default PxHeader;