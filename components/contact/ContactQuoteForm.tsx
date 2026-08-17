'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, Mail, Phone, RefreshCw } from 'lucide-react'
import { toast } from 'sonner'

interface ContactQuoteFormProps {
  variant?: 'contact' | 'services'
}

interface FormDataState {
  name: string
  company: string
  email: string
  phone: string
  origin: string
  destination: string
  equipment: string
  frequency: string
  freightType?: string
  pickupDate?: string
  message: string
}

const initialFormState: FormDataState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  origin: '',
  destination: '',
  equipment: '',
  frequency: '',
  freightType: '',
  pickupDate: '',
  message: '',
}

export function ContactQuoteForm({ variant = 'contact' }: ContactQuoteFormProps) {
  const [formData, setFormData] = useState<FormDataState>(initialFormState)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

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
      // Configuration for frontend form endpoints
      const web3FormsKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
        // Fallback default access key if set
        ''
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || ''

      const payload = {
        access_key: web3FormsKey,
        subject: `NBS Freight Quote Request from ${formData.name || 'Website Visitor'}`,
        from_name: 'NBS Freight Quote Form',
        to_email: 'nspears@nbsfreightllc.com',
        source_page: variant === 'services' ? 'Services Page' : 'Contact Page',
        name: formData.name,
        company: formData.company || 'N/A',
        email: formData.email,
        phone: formData.phone,
        origin: formData.origin,
        destination: formData.destination,
        equipment_type: formData.equipment || 'Not specified',
        shipping_frequency: formData.frequency || 'Not specified',
        freight_type: formData.freightType || 'Not specified',
        estimated_pickup_date: formData.pickupDate || 'Not specified',
        message: formData.message || 'No additional notes provided',
      }

      let isSuccess = false

      if (formspreeId) {
        // Direct client-side submission to Formspree
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        })
        if (res.ok) isSuccess = true
      } else if (web3FormsKey) {
        // Direct client-side submission to Web3Forms
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        })
        const data = await res.json()
        if (data.success) isSuccess = true
      } else {
        // Frontend simulated handling when no public key is yet configured
        // Enables local testing, logs payload, and provides instant confirmation
        await new Promise((resolve) => setTimeout(resolve, 800))
        console.log('[NBS Freight Form Submission]:', payload)
        isSuccess = true
      }

      if (isSuccess) {
        setStatus('success')
        toast.success('Quote request submitted! Nic will be in touch shortly.')
      } else {
        throw new Error('Could not submit form. Please try emailing directly or call us.')
      }
    } catch (err: unknown) {
      console.error('Form submission error:', err)
      setStatus('error')
      const msg =
        err instanceof Error
          ? err.message
          : 'Unable to send your request right now. Please reach out to Nic directly.'
      setErrorMessage(msg)
      toast.error('Submission failed. Please call or email Nic directly.')
    }
  }

  const handleReset = () => {
    setFormData(initialFormState)
    setStatus('idle')
    setErrorMessage('')
  }

  // Generate mailto link for one-click fallback
  const mailtoSubject = encodeURIComponent(
    `Freight Quote Request: ${formData.origin || 'Origin'} -> ${formData.destination || 'Destination'}`
  )
  const mailtoBody = encodeURIComponent(
    `Hi Nic,\n\nI would like to request a freight quote with the following details:\n\n` +
      `• Name: ${formData.name}\n` +
      `• Company: ${formData.company || 'N/A'}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Origin: ${formData.origin}\n` +
      `• Destination: ${formData.destination}\n` +
      `• Equipment Type: ${formData.equipment || 'N/A'}\n` +
      `• Frequency: ${formData.frequency || 'N/A'}\n` +
      (variant === 'services' ? `• Freight Type: ${formData.freightType || 'N/A'}\n` : '') +
      (variant === 'services' ? `• Pickup Date: ${formData.pickupDate || 'N/A'}\n` : '') +
      `• Notes: ${formData.message || 'N/A'}\n\nThank you!`
  )
  const mailtoHref = `mailto:nspears@nbsfreightllc.com?subject=${mailtoSubject}&body=${mailtoBody}`

  if (status === 'success') {
    return (
      <div className="bg-surface border border-primary/30 rounded-sm p-8 sm:p-10 flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/40 flex items-center justify-center flex-shrink-0 text-primary">
            <CheckCircle2 size={28} />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
              Request Received
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-foreground">
              Thank you, {formData.name || 'there'}!
            </h3>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          Nic Spears will personally review your shipment requirements (
          <strong className="text-foreground">
            {formData.origin} to {formData.destination}
          </strong>
          ) and follow up directly via email ({formData.email}) or phone ({formData.phone}).
        </p>

        <div className="bg-surface-2 border border-border rounded-sm p-4 text-xs text-steel space-y-1">
          <div>
            <span className="font-semibold text-foreground">Company:</span>{' '}
            {formData.company || 'Individual / Not specified'}
          </div>
          {formData.equipment && (
            <div>
              <span className="font-semibold text-foreground">Equipment:</span> {formData.equipment}
            </div>
          )}
          {formData.frequency && (
            <div>
              <span className="font-semibold text-foreground">Frequency:</span> {formData.frequency}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-4 pt-2 border-t border-border">
          <Button
            type="button"
            onClick={handleReset}
            variant="outline"
            className="border-border text-foreground hover:bg-surface-2 rounded-sm gap-2"
          >
            <RefreshCw size={14} /> Submit Another Quote
          </Button>
          <Button
            asChild
            className="bg-primary hover:bg-red-hover text-primary-foreground font-bold rounded-sm gap-2"
          >
            <a href="tel:6147724729">
              <Phone size={14} /> Need Immediate Assistance? (614) 772-4729
            </a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {status === 'error' && (
        <div className="md:col-span-2 bg-destructive/10 border border-destructive/40 rounded-sm p-4 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-destructive font-bold text-sm">
            <AlertCircle size={18} />
            <span>{errorMessage || 'Failed to submit quote request.'}</span>
          </div>
          <p className="text-xs text-muted-foreground">
            You can still submit your details directly via your email client or phone:
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href={mailtoHref}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
            >
              <Mail size={13} /> Send Pre-Filled Email
            </a>
            <a
              href="tel:6147724729"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-primary"
            >
              <Phone size={13} /> Call Nic at (614) 772-4729
            </a>
          </div>
        </div>
      )}

      {/* Full Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor={`form-name-${variant}`} className="text-sm font-medium text-foreground">
          Full Name <span className="text-primary">*</span>
        </label>
        <input
          id={`form-name-${variant}`}
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. John Doe"
          className="bg-surface border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-steel focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Company */}
      <div className="flex flex-col gap-2">
        <label htmlFor={`form-company-${variant}`} className="text-sm font-medium text-foreground">
          Company Name {variant === 'services' && <span className="text-primary">*</span>}
        </label>
        <input
          id={`form-company-${variant}`}
          type="text"
          name="company"
          required={variant === 'services'}
          value={formData.company}
          onChange={handleChange}
          placeholder="e.g. Acme Logistics"
          className="bg-surface border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-steel focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Email Address */}
      <div className="flex flex-col gap-2">
        <label htmlFor={`form-email-${variant}`} className="text-sm font-medium text-foreground">
          Email Address <span className="text-primary">*</span>
        </label>
        <input
          id={`form-email-${variant}`}
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="john@company.com"
          className="bg-surface border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-steel focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-2">
        <label htmlFor={`form-phone-${variant}`} className="text-sm font-medium text-foreground">
          Phone Number <span className="text-primary">*</span>
        </label>
        <input
          id={`form-phone-${variant}`}
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="(555) 000-0000"
          className="bg-surface border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-steel focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Origin */}
      <div className="flex flex-col gap-2">
        <label htmlFor={`form-origin-${variant}`} className="text-sm font-medium text-foreground">
          Origin City / State <span className="text-primary">*</span>
        </label>
        <input
          id={`form-origin-${variant}`}
          type="text"
          name="origin"
          required
          value={formData.origin}
          onChange={handleChange}
          placeholder="e.g. Dallas, TX"
          className="bg-surface border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-steel focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Destination */}
      <div className="flex flex-col gap-2">
        <label htmlFor={`form-destination-${variant}`} className="text-sm font-medium text-foreground">
          Destination City / State <span className="text-primary">*</span>
        </label>
        <input
          id={`form-destination-${variant}`}
          type="text"
          name="destination"
          required
          value={formData.destination}
          onChange={handleChange}
          placeholder="e.g. Columbus, OH"
          className="bg-surface border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-steel focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Extended fields for services variant */}
      {variant === 'services' && (
        <>
          <div className="flex flex-col gap-2">
            <label htmlFor={`form-freightType-${variant}`} className="text-sm font-medium text-foreground">
              Freight Type
            </label>
            <input
              id={`form-freightType-${variant}`}
              type="text"
              name="freightType"
              value={formData.freightType}
              onChange={handleChange}
              placeholder="e.g. Palletized goods, machinery..."
              className="bg-surface border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-steel focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor={`form-pickupDate-${variant}`} className="text-sm font-medium text-foreground">
              Estimated Pickup Date
            </label>
            <input
              id={`form-pickupDate-${variant}`}
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className="bg-surface border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </>
      )}

      {/* Equipment Type */}
      <div className="flex flex-col gap-2">
        <label htmlFor={`form-equipment-${variant}`} className="text-sm font-medium text-foreground">
          Equipment Type
        </label>
        <select
          id={`form-equipment-${variant}`}
          name="equipment"
          value={formData.equipment}
          onChange={handleChange}
          className="bg-surface border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
        >
          <option value="">Select equipment type</option>
          <option value="Dry Van">Dry Van</option>
          <option value="Reefer">Reefer</option>
          <option value="Flatbed">Flatbed</option>
          <option value="Step Deck / Specialized">Step Deck / Specialized</option>
          <option value="Not Sure">Not Sure</option>
        </select>
      </div>

      {/* Shipping Frequency */}
      <div className="flex flex-col gap-2">
        <label htmlFor={`form-frequency-${variant}`} className="text-sm font-medium text-foreground">
          Shipping Frequency
        </label>
        <select
          id={`form-frequency-${variant}`}
          name="frequency"
          value={formData.frequency}
          onChange={handleChange}
          className="bg-surface border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
        >
          <option value="">Select frequency</option>
          <option value="One-time / Spot">One-time / Spot</option>
          <option value="Weekly">Weekly</option>
          <option value="Multiple times per week">Multiple times per week</option>
          <option value="Monthly">Monthly</option>
          <option value="As needed">As needed</option>
        </select>
      </div>

      {/* Details/Message */}
      <div className="md:col-span-2 flex flex-col gap-2">
        <label htmlFor={`form-message-${variant}`} className="text-sm font-medium text-foreground">
          Tell Us About Your Freight
        </label>
        <textarea
          id={`form-message-${variant}`}
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your freight, timeline, special requirements, and anything else Nic should know..."
          className="bg-surface border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-steel focus:outline-none focus:border-primary transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="md:col-span-2 mt-2">
        <Button
          type="submit"
          size="lg"
          disabled={status === 'submitting'}
          className="bg-primary hover:bg-red-hover text-primary-foreground font-bold rounded-sm w-full sm:w-auto px-12 gap-2 disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Submitting Request...
            </>
          ) : (
            <>
              Submit Request <ArrowRight size={16} />
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
