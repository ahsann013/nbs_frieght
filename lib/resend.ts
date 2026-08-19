import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY || ''
export const resend = resendApiKey ? new Resend(resendApiKey) : null

export const SENDER_EMAIL =
  process.env.RESEND_FROM_EMAIL || 'NBS Freight <onboarding@resend.dev>'
export const NIC_EMAIL = process.env.NOTIFICATION_EMAIL || 'nspears@nbsfreightllc.com'

export interface ConsultationBookingData {
  name: string
  email: string
  phone: string
  company?: string
  sessionType: '30-min' | '60-min'
  sessionTitle: string
  price: string
  invoiceUrl: string
  topic: string
  preferredTime: string
  notes?: string
}

export interface QuoteRequestData {
  name: string
  email: string
  phone: string
  company?: string
  origin: string
  destination: string
  equipment?: string
  frequency?: string
  freightType?: string
  pickupDate?: string
  message?: string
  sourcePage?: string
}
