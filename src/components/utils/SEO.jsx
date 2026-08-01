import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export const SEO = ({ title, description, keywords, canonical }) => {
    const location = useLocation();
    const baseUrl = "https://www.creozen.co.uk";
    const currentUrl = `${baseUrl}${location.pathname}`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title ? `${title} | Creozen` : 'Creozen - AI & Enterprise Software'}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={canonical ? `${baseUrl}${canonical}` : currentUrl} />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:site_name" content="Creozen" />
            <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
            
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />

            {/* Language & Geo Tags */}
            <meta http-equiv="content-language" content="en-gb" />
            <meta name="geo.region" content="GB-LND" />
            <meta name="geo.placename" content="London" />
        </Helmet>
    );
};