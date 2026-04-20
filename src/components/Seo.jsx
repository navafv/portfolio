import { useEffect } from 'react';
import { projects } from '../data/projects';

const DEFAULT_DESCRIPTION =
  'Navaf V is a full-stack developer and BCA student in Kannur, Kerala, building responsive React frontends, Django backends, REST APIs, and production-ready web applications.';
const DEFAULT_TITLE = 'Navaf V | Full-Stack Developer in Kannur, Kerala';
const DEFAULT_KEYWORDS =
  'Navaf V, full-stack developer, web developer Kerala, React developer, Django developer, portfolio, REST API developer, BCA student';

const getSiteUrl = () => {
  const configured = import.meta.env.VITE_SITE_URL?.trim().replace(/\/$/, '');
  if (configured) return configured;
  if (typeof window !== 'undefined') return window.location.origin;
  return '';
};

const upsertMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value) {
      element.setAttribute(key, value);
    }
  });
};

const upsertLink = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value) {
      element.setAttribute(key, value);
    }
  });
};

const Seo = () => {
  useEffect(() => {
    const siteUrl = getSiteUrl();
    const pageUrl = siteUrl ? `${siteUrl}/` : '';
    const imageUrl = siteUrl ? `${siteUrl}/og-image.png` : '';

    document.title = DEFAULT_TITLE;
    document.documentElement.lang = 'en';

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: DEFAULT_DESCRIPTION,
    });
    upsertMeta('meta[name="keywords"]', {
      name: 'keywords',
      content: DEFAULT_KEYWORDS,
    });
    upsertMeta('meta[name="author"]', {
      name: 'author',
      content: 'Navaf V',
    });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    });
    upsertMeta('meta[name="theme-color"]', {
      name: 'theme-color',
      content: '#0a0a0f',
    });
    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: DEFAULT_TITLE,
    });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: DEFAULT_DESCRIPTION,
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: 'Navaf V Portfolio',
    });
    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: 'en_IN',
    });
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: pageUrl,
    });
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: imageUrl,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: DEFAULT_TITLE,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: DEFAULT_DESCRIPTION,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: imageUrl,
    });
    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: pageUrl,
    });

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          name: 'Navaf V',
          url: pageUrl,
          jobTitle: 'Full-Stack Developer',
          homeLocation: {
            '@type': 'Place',
            name: 'Kannur, Kerala, India',
          },
          alumniOf: {
            '@type': 'EducationalOrganization',
            name: 'Jamia Hamdard Kannur Campus',
          },
          knowsAbout: [
            'React',
            'Django',
            'REST API development',
            'PostgreSQL',
            'SQLite',
            'Flutter',
            'Tailwind CSS',
          ],
          sameAs: ['https://github.com/navafv'],
          image: imageUrl || undefined,
        },
        {
          '@type': 'WebSite',
          name: 'Navaf V Portfolio',
          url: pageUrl,
          description: DEFAULT_DESCRIPTION,
        },
        {
          '@type': 'CollectionPage',
          name: 'Projects by Navaf V',
          url: `${pageUrl}#projects`,
          hasPart: projects
            .filter((project) => project.links.demo || project.links.github)
            .map((project) => ({
              '@type': 'SoftwareSourceCode',
              name: project.title,
              description: project.description,
              codeRepository: project.links.github || undefined,
              url: project.links.demo || undefined,
              programmingLanguage: project.tech.join(', '),
            })),
        },
      ],
    };

    let script = document.head.querySelector('script[data-seo="structured-data"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'structured-data');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, []);

  return null;
};

export default Seo;
