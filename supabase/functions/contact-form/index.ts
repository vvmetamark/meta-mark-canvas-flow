
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { Resend } from 'https://esm.sh/resend@3.2.0'

const CONTACT_EMAIL = 'vvmetamark@gmail.com'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    console.log('RESEND_API_KEY exists:', !!RESEND_API_KEY)
    
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing from environment variables')
      throw new Error('RESEND_API_KEY is not configured in Supabase secrets')
    }
    
    const resend = new Resend(RESEND_API_KEY)
    const { name, email, subject, message } = await req.json()

    console.log('Processing contact form submission:', { name, email, subject })

    if (!name || !email || !subject || !message) {
      console.error('Missing required fields:', { name: !!name, email: !!email, subject: !!subject, message: !!message })
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      })
    }
    
    // Use Resend's verified domain for reliable delivery
    const fromAddress = 'VV Metamark <onboarding@resend.dev>';

    console.log('Sending notification email to company...')
    // 1. Send notification email to the company
    const companyEmailResult = await resend.emails.send({
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
        <p>Please reply directly to this email to respond to the customer.</p>
      `,
    })

    console.log('Company email result:', companyEmailResult)

    console.log('Sending confirmation email to user...')
    // 2. Send confirmation email to the user
    const userEmailResult = await resend.emails.send({
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
        <p>Email: vvmetamark@gmail.com</p>
        <p>Phone: +91 93449 10110</p>
      `,
    })

    console.log('User email result:', userEmailResult)

    return new Response(JSON.stringify({ 
      message: 'Emails sent successfully!',
      companyEmailId: companyEmailResult.data?.id,
      userEmailId: userEmailResult.data?.id
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Detailed error sending email:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    })
    return new Response(JSON.stringify({ 
      error: error.message,
      details: 'Check edge function logs for more information'
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
