import { SEOS } from './seos';

/**
 * Generate a direct WhatsApp click-to-chat URL with prefilled text.
 * @param message Custom message string (will be URI encoded)
 */
export function getWaUrl(message?: string): string {
  const phone = (SEOS.phone || '+6285117428800').replace(/[^0-9]/g, '');
  const defaultText =
    'Halo Kriya, saya tertarik untuk berkonsultasi mengenai solusi teknologi dan kebutuhan sistem kami.';
  const text = encodeURIComponent(message || defaultText);
  return `https://wa.me/${phone}?text=${text}`;
}
