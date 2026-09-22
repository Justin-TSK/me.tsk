'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactState = {
  success: boolean
  error?: string
} | null

export async function sendContactEmail(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = (formData.get('name') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const subject = (formData.get('subject') as string)?.trim()
  const message = (formData.get('message') as string)?.trim()

  // Validation
  if (!name || !email || !subject || !message) {
    return { success: false, error: 'Tous les champs sont obligatoires.' }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Adresse email invalide.' }
  }
  if (message.length < 10) {
    return { success: false, error: 'Le message est trop court (minimum 10 caractères).' }
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['tseketsekediscipline@gmail.com'],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: monospace; background: #09090b; color: #e4e4e7; padding: 32px; border-radius: 12px; max-width: 600px;">
          <h2 style="color: #22d3ee; margin: 0 0 24px;">Nouveau message depuis le portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #a1a1aa; width: 80px;">Nom</td>
              <td style="padding: 8px 0; color: #e4e4e7;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #a1a1aa;">Email</td>
              <td style="padding: 8px 0; color: #22d3ee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #a1a1aa;">Sujet</td>
              <td style="padding: 8px 0; color: #e4e4e7;">${subject}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #27272a; margin: 20px 0;" />
          <p style="color: #a1a1aa; margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
          <p style="color: #e4e4e7; white-space: pre-wrap; margin: 0; line-height: 1.7;">${message}</p>
        </div>
      `,
    })

    if (error) {
      return { success: false, error: "Erreur lors de l'envoi. Veuillez réessayer." }
    }

    return { success: true }
  } catch {
    return { success: false, error: "Une erreur inattendue s'est produite." }
  }
}
