import { trackDemoCtaClick, trackWhatsAppCtaClick } from '@lib/analytics';

function setupAnalyticsListeners() {
  const ctaElements = document.querySelectorAll<HTMLElement>('[data-analytics-cta]');

  ctaElements.forEach((el) => {
    // Avoid attaching duplicate event listeners
    if (el.dataset.analyticsBound === 'true') return;
    el.dataset.analyticsBound = 'true';

    el.addEventListener('click', () => {
      const ctaType = el.getAttribute('data-analytics-cta');
      const location = el.getAttribute('data-analytics-location') || 'unknown';

      const ctaName = el.getAttribute('data-analytics-name') || undefined;

      if (ctaType === 'demo') {
        trackDemoCtaClick(location, ctaName);
      } else if (ctaType === 'whatsapp') {
        trackWhatsAppCtaClick(location);
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupAnalyticsListeners);
} else {
  setupAnalyticsListeners();
}

document.addEventListener('astro:page-load', setupAnalyticsListeners);
