// api/start-trial.js
// Vercel serverless function — stamps trial metadata onto a Clerk user.
// Called once immediately after a new user registers via "Start Free Trial".

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: 'Missing userId' });
  }

  const clerkSecretKey = process.env.CLERK_SECRET_KEY;
  if (!clerkSecretKey) {
    return res.status(500).json({ error: 'Server misconfiguration: missing Clerk secret key' });
  }

  try {
    // Write trial metadata to Clerk user via Clerk Backend API
    const response = await fetch(
      `https://api.clerk.com/v1/users/${userId}/metadata`,
      {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${clerkSecretKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          public_metadata: {
            subscriptionStatus: 'trial',
            trialStartDate: new Date().toISOString(),
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error('Clerk API error:', error);
      return res.status(500).json({ error: 'Failed to update user metadata', details: error });
    }

    return res.status(200).json({ success: true, message: 'Trial started' });

  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'Unexpected server error' });
  }
}
