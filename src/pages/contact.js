import React from 'react';

import Layout from '../components/Layout';
import Head from '../components/Head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h2>Contact</h2>
      <ul>
        <li>Name: Matt Cushing</li>
        <li>Position: Full Stack Web Development</li>
        <li>Email: cushing.matt@gmail.com</li>
        <li>Phone: 1-719-985-0586</li>
        <li>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/matthew-cushing-developer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @matt-cushing-programmer
          </a>
        </li>
      </ul>
    </Layout>
  );
};

export default ContactPage;
