import React, { ReactNode } from 'react';
import { StaticQuery, graphql } from 'gatsby';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.SFC<LayoutProps> = ({ children }) => {
    const siteName = "my Site name";
    return (
        <div>
            <StaticQuery 
                query={ graphql `query HeaderQuery {
                    site {
                        siteMetadata { title }
                    }
                }`}
                render={ data => (
                    <h1>{data.site.siteMetadata.title}</h1>
                )}
            />
            
            {children}
        </div>
    )
}

export default Layout;