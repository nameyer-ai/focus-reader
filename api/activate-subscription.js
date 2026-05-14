// api/activate-subscription.js
// Vercel serverless function — upgrades a trial user to active subscriber.
// Called from TrialExpiredScreen after PayPal payment is confirmed.

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userId, subscriptionId } = req.body;

  if (!userId || !subscriptionId) {
    return res.status(400).json({ error: 'Missing userId or subscriptionId' });
  }

  const clerkSecretKey = process.env.CLERK_SECRET_KEY;
  if (!clerkSecretKey) {
    return res.status(500).json({ error: 'Server misconfiguration: missing Clerk secret key' });
  }

  try {
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
            subscriptionStatus: 'active',
            subscriptionId: subscriptionId,
            subscribedAt: new Date().toISOString(),
            // Keep trialStartDate intact for records — just overwrite the status
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error('Clerk API error:', error);
      return res.status(500).json({ error: 'Failed to activate subscription', details: error });
    }

    return res.status(200).json({ success: true, message: 'Subscription activated' });

  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'Unexpected server error' });
  }
}
