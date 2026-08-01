export const Schema = () => {
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Creozen",
        "alternateName": "Creozen Ltd",
        "url": "https://www.creozen.co.uk/",
        "logo": "https://www.creozen.co.uk/C.svg",
        "sameAs": [
            "https://www.linkedin.com/company/creozen-ltd"
        ],
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "+44 7586 393443",
                "contactType": "customer service",
                "areaServed": "GB",
                "availableLanguage": "English"
            },
            {
                "@type": "ContactPoint",
                "telephone": "+91 6381738184",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "English"
            }
        ],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "124 City Road",
            "addressLocality": "London",
            "postalCode": "EC1V 2NX",
            "addressCountry": "UK"
        }
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(orgSchema)}
        </script>
    );
};