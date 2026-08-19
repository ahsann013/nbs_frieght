import { Resend } from 'resend'

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey || apiKey.trim() === '') {
    return null
  }
  return new Resend(apiKey.trim())
}

export function getSenderEmail() {
  return process.env.RESEND_FROM_EMAIL || 'NBS Freight <onboarding@resend.dev>'
}

export function getNotificationEmail() {
  return process.env.NOTIFICATION_EMAIL || 'ahsan.yousaf.dev@gmail.com'
}

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
