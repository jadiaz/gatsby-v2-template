import React, { ReactNode } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
interface LayoutProps {
    children: ReactNode;
}

const Layout: React.SFC<LayoutProps> = ({ children }) => {
    const siteName = "my Site name";
    return (
        <div>
            <StaticQuery 
                query={ graphql `query HeaderQuery {
                    site { siteMetadata { name, title, description } }
                }`}
                render={ (data) => (
                    <Helmet defaultTitle={data.site.siteMetadata.title}>
                        <html lang="en" />
                        <meta property="og:type" content="website" />
                        <meta property="og:site_name" content={data.site.siteMetadata.name} />
                        <meta name="description" content={data.site.siteMetadata.description} />
                    </Helmet>
                )}
            />
            
            {children}
        </div>
    )
}

export default Layout;