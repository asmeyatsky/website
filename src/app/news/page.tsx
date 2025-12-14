import Layout from '@/components/Layout'
import NewsClientPage from '@/components/NewsClientPage'

// Make this page fully static to ensure reliability in all environments
export const dynamic = 'error'; // Prevents any dynamic server-side rendering
export const revalidate = false; // Makes this a fully static page

const NewsPage = () => {
  return (
    <Layout>
      <div className="min-h-screen py-12">
        <NewsClientPage initialArticles={[]} />
      </div>
    </Layout>
  )
}

export default NewsPage