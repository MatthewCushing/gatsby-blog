import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h2>About</h2>
      <p>
        My name is Matt Cushing and I am a full stack developer. I recently got
        into this world around two months ago and am absolutely loving it. I
        have a bachelors in Computer Science and have been developing since I
        was around the age of 13.
      </p>
      <p>
        My main focus is to develop web sites as well as web applications. The
        web world is growing exponentially and I plan to stay on top of it and
        build the next big thing.
      </p>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
