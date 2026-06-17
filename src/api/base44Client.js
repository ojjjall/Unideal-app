// @ts-nocheck
import { Base44 } from '@base44/sdk';

// Use import.meta.env for Vite
const appId = import.meta.env?.VITE_BASE44_APP_ID || '';

export const base44 = new Base44({
  appId: appId,
  // Add other config if needed
});