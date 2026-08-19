import { NextResponse } from 'next/server'
import { resend, SENDER_EMAIL, NIC_EMAIL, ConsultationBookingData } from '@/lib/resend'

const INVOICE_MAP = {
  '30-min': {
    title: '30-Minute Direction Call',
    price: '$125',
    duration: '30 minutes',
    url: 'https://www.paypal.com/invoice/p/#7W2JV7EURLTF434S',
  },
  '60-min': {
    title: '60-Minute Freight Strategy Session',
    price: '$250',
    duration: '60 minutes',
    url: 'https://www.paypal.com/invoice/p/#XZ6M8XRKMRULGZUN',
  },
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, company, sessionType, topic, preferredTime, notes } = body

    if (!name || !email || !phone || !sessionType || !topic) {
      return NextResponse.json(
        { error: 'Please provide all required fields (Name, Email, Phone, Session, Topic).' },
        { status: 400 }
      )
    }

    const sessionInfo =
      INVOICE_MAP[sessionType as keyof typeof INVOICE_MAP] || INVOICE_MAP['30-min']

    const bookingData: ConsultationBookingData = {
      name,
      email,
      phone,
      company: company || 'N/A',
      sessionType: sessionType as '30-min' | '60-min',
      sessionTitle: sessionInfo.title,
      price: sessionInfo.price,
      invoiceUrl: sessionInfo.url,
      topic,
      preferredTime: preferredTime || 'Flexible / To be confirmed',
      notes: notes || 'None',
    }

    console.log('[Consultation Booking Received]:', bookingData)

    if (resend) {
      // 1. Send confirmation email to the client
      const clientEmailPromise = resend.emails.send({
        from: SENDER_EMAIL,
        to: [email],
        subject: `Booking Confirmed: ${sessionInfo.title} with Nic Spears`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e1e1e; line-height: 1.6; border: 1px solid #e5e5e5; border-radius: 6px; overflow: hidden;">
            <div style="background-color: #0f0f0f; padding: 24px; text-align: center;">
              <h1 style="color: #cc1f1f; margin: 0; font-size: 24px; font-weight: 900; letter-spacing: 2px;">NBS FREIGHT</h1>
              <p style="color: #888880; margin: 4px 0 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Nothing. But. Satisfaction.</p>
            </div>
            
            <div style="padding: 32px 24px;">
              <h2 style="color: #0f0f0f; margin-top: 0; font-size: 20px;">Consultation Request Received</h2>
              <p>Hi <strong>${name}</strong>,</p>
              <p>Thank you for booking a <strong>${sessionInfo.title} (${sessionInfo.duration})</strong> with Nic Spears.</p>
              
              <div style="background-color: #f9f9f9; border-left: 4px solid #cc1f1f; padding: 16px; margin: 24px 0; border-radius: 0 4px 4px 0;">
                <h3 style="margin-top: 0; margin-bottom: 12px; font-size: 15px; color: #0f0f0f;">Session Details</h3>
                <p style="margin: 4px 0; font-size: 14px;"><strong>Session:</strong> ${sessionInfo.title}</p>
                <p style="margin: 4px 0; font-size: 14px;"><strong>Duration:</strong> ${sessionInfo.duration}</p>
                <p style="margin: 4px 0; font-size: 14px;"><strong>Fee:</strong> ${sessionInfo.price}</p>
                <p style="margin: 4px 0; font-size: 14px;"><strong>Primary Topic:</strong> ${topic}</p>
                <p style="margin: 4px 0; font-size: 14px;"><strong>Preferred Timing:</strong> ${bookingData.preferredTime}</p>
              </div>

              <div style="text-align: center; margin: 32px 0;">
                <a href="${sessionInfo.url}" style="background-color: #cc1f1f; color: #ffffff; padding: 14px 28px; font-weight: bold; text-decoration: none; border-radius: 4px; display: inline-block; font-size: 15px;">
                  Pay PayPal Invoice (${sessionInfo.price}) &rarr;
                </a>
                <p style="font-size: 12px; color: #777; margin-top: 8px;">If the button above does not work, visit: <br/><a href="${sessionInfo.url}" style="color: #cc1f1f;">${sessionInfo.url}</a></p>
              </div>

              <h3 style="font-size: 15px; color: #0f0f0f; margin-bottom: 8px;">What Happens Next?</h3>
              <ol style="padding-left: 20px; font-size: 14px; color: #444;">
                <li>Complete your payment via the PayPal invoice link above.</li>
                <li>Nic will review your topic and reach out directly at <strong>${phone}</strong> or <strong>${email}</strong> to confirm the exact call time and dial-in link.</li>
                <li>Have your questions ready to make the most of your session!</li>
              </ol>

              <hr style="border: none; border-top: 1px solid #eee; margin: 28px 0;" />
              <p style="font-size: 13px; color: #666; margin-bottom: 4px;"><strong>Need to get in touch beforehand?</strong></p>
              <p style="font-size: 13px; color: #666; margin-top: 0;">Call Nic directly: <a href="tel:6147724729" style="color: #cc1f1f; font-weight: bold;">(614) 772-4729</a> | Email: <a href="mailto:nspears@nbsfreightllc.com" style="color: #cc1f1f;">nspears@nbsfreightllc.com</a></p>
            </div>

            <div style="background-color: #f4f4f4; padding: 16px 24px; text-align: center; font-size: 12px; color: #888;">
              &copy; ${new Date().getFullYear()} NBS Freight LLC. Veteran-Owned Freight Brokerage.
            </div>
          </div>
        `,
      })

      // 2. Send notification email to Nic Spears
      const nicEmailPromise = resend.emails.send({
        from: SENDER_EMAIL,
        to: [NIC_EMAIL],
        replyTo: email,
        subject: `[New Consultation Booking] ${name} - ${sessionInfo.title}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e1e1e; line-height: 1.6;">
            <h2 style="color: #cc1f1f; border-bottom: 2px solid #cc1f1f; padding-bottom: 8px;">New Consultation Booking</h2>
            <p>A new consultation has been booked on the NBS Freight website.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 140px;">Client Name:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="tel:${phone}">${phone}</a></td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Company:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${company || 'N/A'}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Session Type:</td><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; color: #cc1f1f;">${sessionInfo.title} (${sessionInfo.price})</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Preferred Timing:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${bookingData.preferredTime}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Topic / Goal:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${topic}</td></tr>
              ${notes ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Additional Notes:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${notes}</td></tr>` : ''}
              <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Invoice URL:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="${sessionInfo.url}">${sessionInfo.url}</a></td></tr>
            </table>

            <p style="margin-top: 20px;">The client has been automatically provided the PayPal invoice link to pay.</p>
          </div>
        `,
      })

      await Promise.allSettled([clientEmailPromise, nicEmailPromise])
    } else {
      console.warn(
        '[Resend] RESEND_API_KEY is not set. Emails were logged to console instead of sending.'
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Consultation booking submitted successfully.',
      redirectUrl: sessionInfo.url,
      booking: bookingData,
    })
  } catch (error: unknown) {
    console.error('Error in /api/consulting:', error)
    const errMessage = error instanceof Error ? error.message : 'Internal Server Error'
    return NextResponse.json({ error: errMessage }, { status: 500 })
  }
}
