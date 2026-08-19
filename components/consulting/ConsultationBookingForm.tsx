'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  CreditCard,
  Phone,
  Mail,
  Calendar,
  ExternalLink,
} from 'lucide-react'
import { toast } from 'sonner'
import { CONSULTATION_PLANS, ConsultationPlan } from '@/lib/consulting'

interface ConsultationBookingFormProps {
  initialPlanId?: '30-min' | '60-min'
}

export function ConsultationBookingForm({
  initialPlanId = '30-min',
}: ConsultationBookingFormProps) {
  const [selectedPlanId, setSelectedPlanId] = useState<'30-min' | '60-min'>(initialPlanId)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    topic: '',
    preferredTime: '',
    notes: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [redirectUrl, setRedirectUrl] = useState('')

  const selectedPlan =
    CONSULTATION_PLANS.find((p) => p.id === selectedPlanId) || CONSULTATION_PLANS[0]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/consulting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          sessionType: selectedPlanId,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit booking request.')
      }

      const invoiceUrl = result.redirectUrl || selectedPlan.invoiceUrl
      setRedirectUrl(invoiceUrl)
      setStatus('success')
      toast.success('Booking registered! Confirmation email sent with PayPal invoice.')

      // Auto-redirect to PayPal invoice after 1.5 seconds
      setTimeout(() => {
        if (invoiceUrl) {
          window.location.href = invoiceUrl
        }
      }, 1500)
    } catch (err: unknown) {
      console.error('Consultation booking error:', err)
      setStatus('error')
      const msg =
        err instanceof Error
          ? err.message
          : 'Unable to submit booking. Please reach out to Nic directly.'
      setErrorMessage(msg)
      toast.error('Booking submission failed. Please try again or call Nic.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-surface border border-primary/40 rounded-sm p-8 sm:p-12 text-center flex flex-col items-center gap-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center text-primary">
          <CheckCircle2 size={36} />
        </div>

        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
            Booking Received &amp; Invoice Ready
          </span>
          <h3 className="font-display text-3xl font-black text-foreground mb-3">
            Thank you, {formData.name}!
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We have sent a confirmation email to <strong className="text-foreground">{formData.email}</strong> with your session details for the{' '}
            <strong className="text-foreground">{selectedPlan.title} ({selectedPlan.price})</strong>.
          </p>
          <p className="text-sm text-steel">
            Redirecting you to the secure PayPal invoice page to complete your payment...
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
          <Button
            asChild
            size="lg"
            className="w-full bg-primary hover:bg-red-hover text-primary-foreground font-bold rounded-sm gap-2"
          >
            <a href={redirectUrl || selectedPlan.invoiceUrl}>
              <CreditCard size={18} /> Pay PayPal Invoice ({selectedPlan.price}) <ExternalLink size={14} />
            </a>
          </Button>
        </div>

        <div className="pt-6 border-t border-border w-full max-w-md text-xs text-steel">
          Need to reach Nic right away? Call{' '}
          <a href="tel:6147724729" className="text-primary font-bold hover:underline">
            (614) 772-4729
          </a>{' '}
          or email{' '}
          <a href="mailto:nspears@nbsfreightllc.com" className="text-primary font-bold hover:underline">
            nspears@nbsfreightllc.com
          </a>
        </div>
      </div>
    )
  }

  return (
    <div id="booking-form" className="bg-surface border border-border rounded-sm p-6 sm:p-10 scroll-mt-28">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-0.5 bg-primary" />
          <span className="text-xs font-bold tracking-widest uppercase text-primary">
            Step 1: Select Session &amp; Fill Details
          </span>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-black text-foreground mb-2">
          Book Your Consultation with Nic Spears
        </h3>
        <p className="text-sm text-muted-foreground">
          Fill out the intake form below. You will receive a confirmation email and be directed to the PayPal invoice to complete payment.
        </p>
      </div>

      {/* Plan Selector Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {CONSULTATION_PLANS.map((plan) => {
          const isSelected = selectedPlanId === plan.id
          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelectedPlanId(plan.id)}
              className={`text-left p-5 rounded-sm border transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-surface-2 border-primary ring-1 ring-primary'
                  : 'bg-surface border-border hover:border-foreground/30'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-bold uppercase tracking-widest ${
                      isSelected ? 'text-primary' : 'text-steel'
                    }`}
                  >
                    {plan.duration} {plan.unit} Call
                  </span>
                  <span className="font-display text-2xl font-black text-foreground">
                    {plan.price}
                  </span>
                </div>
                <div className="font-display text-lg font-bold text-foreground mb-1">
                  {plan.title}
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  {plan.tagline}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs">
                <span className="text-steel">PayPal Invoice</span>
                <span className={`font-bold ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                  {isSelected ? '✓ Selected' : 'Select Plan'}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {status === 'error' && (
          <div className="md:col-span-2 bg-destructive/10 border border-destructive/40 rounded-sm p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-destructive font-bold text-sm">
              <AlertCircle size={18} />
              <span>{errorMessage || 'Failed to submit booking.'}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              You can still proceed directly to the PayPal invoice or call Nic:
            </p>
            <div className="flex gap-4 flex-wrap mt-1">
              <a
                href={selectedPlan.invoiceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
              >
                <CreditCard size={13} /> Open PayPal Invoice ({selectedPlan.price})
              </a>
              <a
                href="tel:6147724729"
                className="text-xs font-bold text-foreground hover:text-primary inline-flex items-center gap-1"
              >
                <Phone size={13} /> Call (614) 772-4729
              </a>
            </div>
          </div>
        )}

        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="booking-name" className="text-sm font-medium text-foreground">
            Full Name <span className="text-primary">*</span>
          </label>
          <input
            id="booking-name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Alex Johnson"
            className="bg-surface-2 border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-steel focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="booking-email" className="text-sm font-medium text-foreground">
            Email Address (for Confirmation &amp; Dial-in) <span className="text-primary">*</span>
          </label>
          <input
            id="booking-email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="alex@company.com"
            className="bg-surface-2 border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-steel focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label htmlFor="booking-phone" className="text-sm font-medium text-foreground">
            Phone Number <span className="text-primary">*</span>
          </label>
          <input
            id="booking-phone"
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="(614) 000-0000"
            className="bg-surface-2 border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-steel focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Company / Operation */}
        <div className="flex flex-col gap-2">
          <label htmlFor="booking-company" className="text-sm font-medium text-foreground">
            Company / Operation (Optional)
          </label>
          <input
            id="booking-company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Independent Broker / Trucking LLC"
            className="bg-surface-2 border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-steel focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Preferred Scheduling Time */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <label htmlFor="booking-preferredTime" className="text-sm font-medium text-foreground">
            Preferred Day(s) &amp; Time Window <span className="text-primary">*</span>
          </label>
          <input
            id="booking-preferredTime"
            type="text"
            name="preferredTime"
            required
            value={formData.preferredTime}
            onChange={handleChange}
            placeholder="e.g. Tuesdays or Thursdays between 2pm - 5pm EST"
            className="bg-surface-2 border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-steel focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Primary Topic */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <label htmlFor="booking-topic" className="text-sm font-medium text-foreground">
            What is the primary question, challenge, or topic for this call? <span className="text-primary">*</span>
          </label>
          <textarea
            id="booking-topic"
            name="topic"
            rows={3}
            required
            value={formData.topic}
            onChange={handleChange}
            placeholder="Give Nic context on your situation so he can come prepared with specific solutions..."
            className="bg-surface-2 border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-steel focus:outline-none focus:border-primary transition-colors resize-none"
          />
        </div>

        {/* Submit button */}
        <div className="md:col-span-2 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button
            type="submit"
            size="lg"
            disabled={status === 'submitting'}
            className="w-full sm:w-auto bg-primary hover:bg-red-hover text-primary-foreground font-bold rounded-sm px-10 gap-2 disabled:opacity-70"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending Confirmation &amp; Loading Invoice...
              </>
            ) : (
              <>
                Confirm &amp; Proceed to PayPal ({selectedPlan.price}) <ArrowRight size={16} />
              </>
            )}
          </Button>

          <div className="flex items-center gap-2 text-xs text-steel">
            <CreditCard size={14} className="text-primary" />
            <span>Secure payment via PayPal Invoice ({selectedPlan.price})</span>
          </div>
        </div>
      </form>
    </div>
  )
}
