import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.BEEHIIV_API_KEY;
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

    if (!apiKey || !publicationId) {
      console.error('Missing Beehiiv configuration');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Beehiiv API endpoint
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          reactivate_existing: false,
          send_welcome_email: true,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      // Handle specific Beehiiv error responses
      if (response.status === 422) {
        return NextResponse.json(
          { error: data.errors?.[0]?.message || 'Invalid email address' },
          { status: 422 }
        );
      }
      
      return NextResponse.json(
        { error: data.message || 'Failed to subscribe' },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}

