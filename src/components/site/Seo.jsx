import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://digitise360.com';

const pages = {
  '/': {
    title: 'DigiTise360 | Field Service Management Software UK',
    description:
      'DigiTise360 is UK field service management software for jobs, engineers, PPM, defects, quotes, invoicing, projects, customer portals and field operations.',
  },
  '/features': {
    title: 'Field Service Management Features | DigiTise360',
    description:
      'Explore DigiTise360 features including job scheduling, engineer mobile, PPM, defects, digital quotes, invoicing, stock, projects, CRM, customer portal and reporting.',
  },
  '/industries': {
    title: 'Field Service Software for Contractors | DigiTise360',
    description:
      'Field service software for fire and security, electrical, M&E, facilities management and service contractors. Manage PPM, reactive jobs, engineers, defects and commercial workflows.',
  },
  '/pricing': {
    title: 'DigiTise360 Pricing | £29.99 Per User Per Month',
    description:
      'DigiTise360 costs £29.99 per user per month with the full platform included. No artificial Basic, Pro or Premium feature tiers.',
  },
  '/about': {
    title: 'About DigiTise360 | Built for Field Service Contractors',
    description:
      'Learn why DigiTise360 was built from real field-service experience to simplify jobs, maintenance, engineers, customers and commercial operations.',
  },
  '/contact': {
    title: 'Contact DigiTise360 | Field Service Management Software',
    description:
      'Contact DigiTise360 to discuss your field service operation, arrange a demo, request a trial or ask about pricing.',
  },
  '/book-a-demo': {
    title: 'Book a DigiTise360 Demo',
    description:
      'Book a personalised DigiTise360 demo and see job scheduling, engineer mobile, PPM, defects, quotes, invoicing, reporting and customer workflows in action.',
  },
  '/start-free-trial': {
    title: 'Start a DigiTise360 Free Trial',
    description:
      'Request a DigiTise360 free trial and get access to the field service management platform for your team.',
  },
};

const privatePaths = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
];

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

export default function Seo() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const page = pages[path];
    const isPrivate = privatePaths.includes(path);

    if (isPrivate) {
      document.title = 'DigiTise360';

      setMeta('meta[name="robots"]', {
        name: 'robots',
        content: 'noindex, nofollow',
      });

      return;
    }

    const title =
      page?.title || 'DigiTise360 | Field Service Management Software UK';

    const description =
      page?.description ||
      'DigiTise360 helps field service contractors manage jobs, engineers, maintenance, customers and commercial workflows.';

    const canonicalUrl =
      path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;

    document.title = title;

    setMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    });

    setMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow',
    });

    setMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: title,
    });

    setMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    });

    setMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });

    setMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });

    setMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: 'DigiTise360',
    });

    setMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    setMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: title,
    });

    setMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    });

    let canonical = document.head.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', canonicalUrl);
  }, [location.pathname]);

  return null;
}
