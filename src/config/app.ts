export const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080'

export const PUBLIC_ROUTES = ['/']
export const PROTECTED_ROUTES = ['/candidate','/admin']
export const AUTH_ROUTES = ['/auth/login','/auth/register','/auth/forgot-password']
