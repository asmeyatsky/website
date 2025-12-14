import Layout from '@/components/Layout'

// Make this page fully static to ensure reliability in all environments
export const dynamic = 'error'; // Prevents any dynamic server-side rendering
export const revalidate = false; // Makes this a fully static page

export default function Privacy() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">Last updated: September 2025</p>

          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">
            We collect information you provide directly to us, such as when you contact us through our website,
            schedule consultations, or subscribe to our newsletter.
          </p>

          <h2 className="text-2xl font-semibold mb-4">How We Use Information</h2>
          <p className="mb-4">
            We use the information we collect to provide, maintain, and improve our services, respond to your
            inquiries, and communicate with you about our consulting services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
          <p className="mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without
            your consent, except as described in this policy.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:allan@smeyatsky.com" className="text-accent-blue hover:underline">
              allan@smeyatsky.com
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}