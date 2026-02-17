
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
}

const SEO = ({
    title,
    description = "Directorio de empresas y servicios en Valle de la Pascua. Encuentra los mejores negocios locales.",
    image = "/og-image.jpg",
    url,
    type = "website"
}: SEOProps) => {
    const siteTitle = "EnLaPascua.com";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const canonicalUrl = url ? `https://enlapascua.com${url}` : "https://enlapascua.com";

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
