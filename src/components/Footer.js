import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import footerStyles from './styles/footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          date
        }
      }
    }
  `);

  return (
    <footer className={footerStyles.footer}>
      <p>
        Created by {data.site.siteMetadata.author}, &copy;{' '}
        {data.site.siteMetadata.date}
      </p>
    </footer>
  );
};

export default Footer;
