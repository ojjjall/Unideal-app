// src/api/base44Client.js
import { Base44 } from '@base44/sdk'; // or whatever the import is

export const base44 = new Base44({
  appId: import.meta.env.VITE_BASE44_APP_ID,
  // other config
});