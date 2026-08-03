import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY!;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
  const SERVER = process.env.MAILCHIMP_SERVER!;

  const response = await fetch(
    `https://${SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
    {
      method: 'POST',
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email_address: email, status: 'subscribed' }),
    }
  );

  const data = await response.json();

  if (response.ok) {
    return NextResponse.json({ success: true });
  } else if (data.title === 'Member Exists') {
    return NextResponse.json({ error: 'already_subscribed' }, { status: 400 });
  } else {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
