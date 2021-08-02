import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link
          to={`/`}
          style={{ fontWeight: 700 }}
          className="text-light"
        >
          <h1>Welcome to User Thoughts!</h1>
          <h6>User Thoughts is a demonstration of the ability to integrate React, AWS DynamoDB, and AWS S3 to create an app where users can come and post their thoughts and images if they like. Users can also view other users' profiles via clicking the user's name above the thought.</h6>
          <hr />
          <h6>This app is deployed on an EC2 Instance</h6>
        </Link>{' '}
      </div>
    </header>
  );
};

export default Header;
