/**
 * Analytics Event Helper for Alur Kriya Teknologi
 * Dispatches privacy-conscious custom events to window.dataLayer (Google Tag Manager).
 * Strictly NO personally identifiable information (PII) is included in event payloads.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type CtaLocation =
  | 'hero_primary'
  | 'hero_secondary'
  | 'pain_solution'
  | 'role_benefits'
  | 'implementation_workflow'
  | 'bottom_closing'
  | 'floating_fab'
  | 'nav_header';

export interface BaseEventParams {
  page_path?: string;
  [key: string]: unknown;
}

/**
 * Safely push an event to window.dataLayer without PII.
 */
export function trackEvent(eventName: string, params: BaseEventParams = {}): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];

  const payload = {
    event: eventName,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString(),
    ...params,
  };

  window.dataLayer.push(payload);
}

/**
 * Track primary demo CTA clicks.
 */
export function trackDemoCtaClick(location: CtaLocation | string, ctaName?: string): void {
  const defaultCtaName =
    typeof window !== 'undefined' && window.location.pathname.includes('perluasan-jaringan')
      ? 'Konsultasi Kebutuhan Jaringan'
      : typeof window !== 'undefined' && window.location.pathname.includes('ziswaf')
        ? 'Minta Demo ERP ZISWAF'
        : 'Konsultasi Solusi Kriya';

  trackEvent('click_demo_cta', {
    cta_name: ctaName || defaultCtaName,
    cta_location: location,
  });
}

/**
 * Track WhatsApp consultation CTA clicks.
 */
export function trackWhatsAppCtaClick(location: CtaLocation | string): void {
  trackEvent('click_whatsapp_cta', {
    cta_name: 'Konsultasi WhatsApp',
    cta_location: location,
  });
}

/**
 * Track form interaction start (first input / focus), without PII.
 */
export function trackFormStart(formName: string): void {
  trackEvent('form_start', {
    form_name: formName,
  });
}

/**
 * Track successful form submission, without PII.
 */
export function trackFormSubmit(formName: string): void {
  trackEvent('form_submit', {
    form_name: formName,
  });
}
