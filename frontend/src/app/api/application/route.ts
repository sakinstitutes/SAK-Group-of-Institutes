export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbdnvwon';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      dob, 
      gender,
      district,
      state,
      qualification,
      stream,
      percentage,
      passingYear,
      institution,
      course,
      source,
      address2 // honeypot
    } = data;

    // Honeypot check for spam bots
    if (address2) {
      console.log('Spam bot detected via honeypot in application form.');
      return NextResponse.json({ message: 'Application submitted successfully' }, { status: 200 });
    }

    // Minimal validation
    if (!firstName || !email || !phone || !course) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const appId = 'SAK-' + Math.floor(100000 + Math.random() * 900000);

    const formspreeResponse = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `New Application: ${firstName} ${lastName} for ${course.toUpperCase()}`,
        _replyto: email,
        formType: 'Application',
        applicationId: appId,
        firstName,
        lastName,
        email,
        phone,
        dob,
        gender,
        district,
        state,
        qualification,
        stream,
        percentage,
        passingYear,
        institution,
        course: course.toUpperCase(),
        source,
      }),
    });

    if (!formspreeResponse.ok) {
      throw new Error(`Formspree responded with status ${formspreeResponse.status}`);
    }

    return NextResponse.json({
      success: true,
      applicationId: appId
    });

  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json({ error: 'Failed to process application' }, { status: 500 });
  }
}
