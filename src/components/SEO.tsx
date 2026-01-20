import React from 'react';
import { Helmet } from 'react-helmet-async';
import { content } from '../Content';

const SEO: React.FC = () => {
    const { seo, infos, images } = content;
    const fullUrl = `${seo.domain}${seo.path}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{seo.title}</title>
            <meta name="title" content={seo.title} />
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />
            <meta name="theme-color" content={seo.themeColor} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={seo.og.type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={seo.og.title} />
            <meta property="og:description" content={seo.og.description} />
            <meta property="og:image" content={`${seo.domain}${images.seo.preview}`} />
            <meta property="og:site_name" content={seo.og.siteName} />
            <meta property="og:locale" content={seo.og.locale} />

            {/* Twitter */}
            <meta name="twitter:card" content={seo.twitter.card} />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={seo.og.title} />
            <meta name="twitter:description" content={seo.og.description} />
            <meta name="twitter:image" content={`${seo.domain}${images.seo.preview}`} />

            {/* Contact Info - Schema.org */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": infos.name,
                    "description": seo.description,
                    "url": seo.domain,
                    "telephone": infos.phone,
                    "email": infos.email,
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": infos.address,
                    },
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
