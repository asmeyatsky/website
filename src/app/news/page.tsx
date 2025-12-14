import Layout from '@/components/Layout'
import NewsClientPage from '@/components/NewsClientPage'

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