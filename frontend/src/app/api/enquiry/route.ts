export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbdnvwon';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, course, message, address2 } = data;

    // Honeypot check for spam bots
    if (address2) {
      console.log('Spam bot detected via honeypot in enquiry form.');
      return NextResponse.json({ success: true, simulated: true });
    }

    // Validate inputs
    if (!name || !email || !phone || !course) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const formspreeResponse = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `New Student Enquiry: ${name} (${course})`,
        _replyto: email,
        formType: 'Enquiry',
        name,
        email,
        phone,
        course: course.toUpperCase(),
        message: message || 'N/A',
      }),
    });

    if (!formspreeResponse.ok) {
      throw new Error(`Formspree responded with status ${formspreeResponse.status}`);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error sending enquiry to Formspree:', error);
    return NextResponse.json({ error: 'Failed to send enquiry' }, { status: 500 });
  }
}
