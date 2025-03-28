import crypto from 'crypto';

/**
 * Generate a random token for email confirmation
 * @returns A random string token
 */
export function generateToken(): string {
  return crypto.randomBytes(32).toString('hex');
}