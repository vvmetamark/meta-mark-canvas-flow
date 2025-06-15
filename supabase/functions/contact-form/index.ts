
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
// Supabase Edge Functions run on Deno, so we import Resend from a URL.
import { Resend } from 'https://esm.sh/resend@3.2.0'

const CONTACT_EMAIL = 'vvmetamark@gmail.com'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // This is needed for CORS preflight requests.
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not set in Supabase secrets. Please add it in your project settings.')
    }
    
    const resend = new Resend(RESEND_API_KEY)
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      })
    }
    
    // NOTE: For production, you must use a domain you have verified in Resend.
    // I've updated this to use your company's domain. Please ensure you have verified 'vvmetamark.com' in your Resend account.
    const fromAddress = 'VV Metamark <noreply@vvmetamark.com>';

    // 1. Send notification email to the company
    await resend.emails.send({
      from: fromAddress,
      to: [CONTACT_EMAIL],
      reply_to: email,
      subject: `New Contact Form Lead: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p>You received a new message from your website contact form.</p>
        <hr>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
      `,
    })

    // 2. Send confirmation email to the user
    await resend.emails.send({
      from: fromAddress,
      to: [email],
      subject: 'Thank you for contacting VV Metamark!',
      html: `
        <h1>Thank you for your message!</h1>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you soon. Here is a copy for your records:</p>
        <hr>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p>Best regards,</p>
        <p>The VV Metamark Team</p>
      `,
    })

    return new Response(JSON.stringify({ message: 'Emails sent successfully!' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
