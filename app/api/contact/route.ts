import { NextResponse } from 'next/server'
import { getResend, getSenderEmail, getNotificationEmail, QuoteRequestData } from '@/lib/resend'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      name,
      email,
      phone,
      company,
      origin,
      destination,
      equipment,
      frequency,
      freightType,
      pickupDate,
      message,
      sourcePage,
    } = body

    if (!name || !email || !phone || !origin || !destination) {
      return NextResponse.json(
        { error: 'Please provide all required fields (Name, Email, Phone, Origin, Destination).' },
        { status: 400 }
      )
    }

    const quoteData: QuoteRequestData = {
      name,
      email,
      phone,
      company: company || 'N/A',
      origin,
      destination,
      equipment: equipment || 'Not specified',
      frequency: frequency || 'Not specified',
      freightType: freightType || 'Not specified',
      pickupDate: pickupDate || 'Not specified',
      message: message || 'No additional notes provided',
      sourcePage: sourcePage || 'Website Form',
    }

    const resend = getResend()
    const senderEmail = getSenderEmail()
    const notifEmail = getNotificationEmail()

    console.log('[Quote Request Received]:', quoteData)
    console.log(`[Resend Config] API Key present: ${!!resend}, Sender: ${senderEmail}, Notification Target: ${notifEmail}`)

    let emailSent = false
    const emailErrors: string[] = []

    if (resend) {
      // 1. Send notification email to the owner / notification email (e.g. ahsan.yousaf.dev@gmail.com)
      try {
        const notifResult = await resend.emails.send({
          from: senderEmail,
          to: [notifEmail],
          replyTo: email,
          subject: `[New Freight Quote Request] ${name} (${origin} to ${destination})`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e1e1e; line-height: 1.6;">
              <h2 style="color: #cc1f1f; border-bottom: 2px solid #cc1f1f; padding-bottom: 8px;">New Freight Quote Request</h2>
              <p>A new shipment inquiry has been submitted on <strong>${quoteData.sourcePage}</strong>.</p>
              
              <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 150px;">Customer Name:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Company:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${quoteData.company}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="tel:${phone}">${phone}</a></td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Origin:</td><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">${origin}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Destination:</td><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">${destination}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Equipment:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${quoteData.equipment}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Frequency:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${quoteData.frequency}</td></tr>
                ${freightType ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Freight Type:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${freightType}</td></tr>` : ''}
                ${pickupDate ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Pickup Date:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${pickupDate}</td></tr>` : ''}
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Notes / Details:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${quoteData.message}</td></tr>
              </table>

              <div style="margin-top: 24px;">
                <a href="mailto:${email}?subject=NBS Freight Quote: ${origin} to ${destination}" style="background-color: #cc1f1f; color: #ffffff; padding: 10px 20px; font-weight: bold; text-decoration: none; border-radius: 4px; display: inline-block;">
                  Reply via Email
                </a>
                <a href="tel:${phone}" style="background-color: #1e1e1e; color: #ffffff; padding: 10px 20px; font-weight: bold; text-decoration: none; border-radius: 4px; display: inline-block; margin-left: 10px;">
                  Call ${phone}
                </a>
              </div>
            </div>
          `,
        })

        if (notifResult.error) {
          console.error('[Resend Error - Notification Email]:', notifResult.error)
          emailErrors.push(`Notification Email: ${notifResult.error.message}`)
        } else {
          console.log('[Resend Success - Notification Email Sent ID]:', notifResult.data?.id)
          emailSent = true
        }
      } catch (err: unknown) {
        console.error('[Resend Exception - Notification Email]:', err)
        if (err instanceof Error) emailErrors.push(err.message)
      }

      // 2. Send confirmation email to the customer
      try {
        const clientResult = await resend.emails.send({
          from: senderEmail,
          to: [email],
          subject: `Freight Quote Request Received - NBS Freight LLC`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e1e1e; line-height: 1.6; border: 1px solid #e5e5e5; border-radius: 6px; overflow: hidden;">
              <div style="background-color: #0f0f0f; padding: 24px; text-align: center;">
                <h1 style="color: #cc1f1f; margin: 0; font-size: 24px; font-weight: 900; letter-spacing: 2px;">NBS FREIGHT</h1>
                <p style="color: #888880; margin: 4px 0 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Nothing. But. Satisfaction.</p>
              </div>
              
              <div style="padding: 32px 24px;">
                <h2 style="color: #0f0f0f; margin-top: 0; font-size: 20px;">We Received Your Freight Quote Request</h2>
                <p>Hi <strong>${name}</strong>,</p>
                <p>Thank you for reaching out to NBS Freight. Nic Spears personally reviews every inquiry and will follow up with you directly via email or phone.</p>
                
                <div style="background-color: #f9f9f9; border-left: 4px solid #cc1f1f; padding: 16px; margin: 24px 0; border-radius: 0 4px 4px 0;">
                  <h3 style="margin-top: 0; margin-bottom: 12px; font-size: 15px; color: #0f0f0f;">Summary of Your Request</h3>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>Lane:</strong> ${origin} &rarr; ${destination}</p>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>Company:</strong> ${quoteData.company}</p>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>Equipment:</strong> ${quoteData.equipment}</p>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>Frequency:</strong> ${quoteData.frequency}</p>
                  ${freightType ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Freight Type:</strong> ${freightType}</p>` : ''}
                  ${pickupDate ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Pickup Date:</strong> ${pickupDate}</p>` : ''}
                  ${message ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Notes:</strong> ${message}</p>` : ''}
                </div>

                <p style="font-size: 14px; color: #444;">If your shipment is time-sensitive and you need immediate assistance, feel free to call Nic directly:</p>
                
                <div style="text-align: center; margin: 24px 0;">
                  <a href="tel:6147724729" style="background-color: #cc1f1f; color: #ffffff; padding: 12px 24px; font-weight: bold; text-decoration: none; border-radius: 4px; display: inline-block; font-size: 15px;">
                    Call Nic: (614) 772-4729
                  </a>
                </div>

                <hr style="border: none; border-top: 1px solid #eee; margin: 28px 0;" />
                <p style="font-size: 13px; color: #666; margin: 0;">NBS Freight LLC | MC#1356267 | DOT#3784905<br/>Veteran-Owned Freight Brokerage</p>
              </div>

              <div style="background-color: #f4f4f4; padding: 16px 24px; text-align: center; font-size: 12px; color: #888;">
                &copy; ${new Date().getFullYear()} NBS Freight LLC. All rights reserved.
              </div>
            </div>
          `,
        })

        if (clientResult.error) {
          console.warn('[Resend Warning - Client Email]:', clientResult.error)
          emailErrors.push(`Client Email: ${clientResult.error.message}`)
        } else {
          console.log('[Resend Success - Client Email Sent ID]:', clientResult.data?.id)
        }
      } catch (err: unknown) {
        console.warn('[Resend Exception - Client Email]:', err)
      }
    } else {
      console.warn(
        '[Resend] RESEND_API_KEY is not set in environment. Please add RESEND_API_KEY to .env.local'
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Quote request received successfully.',
      quote: quoteData,
      emailSent,
      hasApiKey: !!resend,
      emailErrors: emailErrors.length > 0 ? emailErrors : undefined,
    })
  } catch (error: unknown) {
    console.error('Error in /api/contact:', error)
    const errMessage = error instanceof Error ? error.message : 'Internal Server Error'
    return NextResponse.json({ error: errMessage }, { status: 500 })
  }
}
