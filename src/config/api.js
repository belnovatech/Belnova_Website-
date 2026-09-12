/**
 * API configuration for Belnova Website.
 * Uses VITE_API_URL environment variable if set, otherwise defaults to production backend.
 */
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://backend-belnova-website.onrender.com";

export const CONTACT_API_ENDPOINT = `${API_BASE_URL}/api/contact`;
