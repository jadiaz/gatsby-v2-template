import React, { ReactNode } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { CssBaseline } from '../../node_modules/@material-ui/core';
interface LayoutProps {
    children: ReactNode;
}

const Layout: React.SFC<LayoutProps> = ({ children }) => {

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
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto: 300,400,500" />
                        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" />
                    </Helmet>
                )}
            />
            <>
            <CssBaseline />
            {children}
            </>
        </div>
    )
}

export default Layout;