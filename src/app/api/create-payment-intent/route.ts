import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    // Create a Checkout Session with custom appearance
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Course Name', // Replace with actual course name
            },
            unit_amount: 1400, // Amount in cents
          },
          quantity: 1,
        },
      ],
      custom_fields: [
        {
          key: 'first_name',
          label: {
            type: 'custom',
            custom: 'First Name',
          },
          type: 'text',
        },
        {
          key: 'last_name',
          label: {
            type: 'custom',
            custom: 'Last Name',
          },
          type: 'text',
        },
        {
          key: 'phone',
          label: {
            type: 'custom',
            custom: 'Phone Number',
          },
          type: 'text',
        },
      ],
      custom_text: {
        submit: {
          message: 'We\'ll email you instructions on how to get started.',
        },
      },
      ui_mode: 'embedded',
      return_url: `${req.headers.get('origin')}/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({
      clientSecret: session.client_secret,
    });
  } catch (err) {
    if (err instanceof Stripe.errors.StripeError) {
      console.error('Stripe error:', err.message);
      return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
    } else {
      console.error('Unexpected error:', err);
      return NextResponse.json({ error: 'Unexpected error occurred' }, { status: 500 });
    }
  }
}