import Layout from '@/components/Layout'

export default function Terms() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">Last updated: September 2025</p>

          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using this website, you accept and agree to be bound by the terms and provision
            of this agreement.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
          <p className="mb-4">
            Allan Smeyatsky provides technology consulting services including AI strategy, enterprise
            architecture, cloud migration, and digital transformation consulting.
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
          <p className="mb-4">
            The content, design, and all materials on this website are protected by copyright and other
            intellectual property laws and are owned by Allan Smeyatsky.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. Consultation Services</h2>
          <p className="mb-4">
            Consultation services are provided on a professional basis. Specific terms and conditions
            will be outlined in individual service agreements.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall Allan Smeyatsky be liable for any direct, indirect, incidental, special,
            or consequential damages arising out of the use of this website or consulting services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
          <p className="mb-4">
            For questions about these Terms of Service, please contact{' '}
            <a href="mailto:allan@smeyatsky.com" className="text-accent-blue hover:underline">
              allan@smeyatsky.com
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}