import Layout from '@/components/Layout'
import NewsClientPage from '@/components/NewsClientPage'
import { Storage } from '@google-cloud/storage'; // New import

// Define the structure of an article
interface NewsArticle {
  title: string;
  link: string;
  published: string;
  category: string;
}

const NewsPage = async () => {
  const GCS_BUCKET_NAME = "website-469906-ai-news";
  const GCS_FILE_NAME = "ai_news.json";
  let initialArticles: NewsArticle[] = [];

  try {
    const storage = new Storage(); // Authenticates automatically with service account in Cloud Build
    const bucket = storage.bucket(GCS_BUCKET_NAME);
    const file = bucket.file(GCS_FILE_NAME);

    const [contents] = await file.download(); // Download file contents
    const data = JSON.parse(contents.toString('utf8')); // Parse as JSON

    // Flatten the data and add category
    for (const category in data) {
      if (Object.prototype.hasOwnProperty.call(data, category)) {
        data[category].forEach((article: any) => {
          initialArticles.push({
            title: article.title,
            link: article.link,
            published: article.published,
            category: category, // Add the category from the JSON key
          });
        });
      }
    }
  } catch (error) {
    console.error("Error fetching or parsing news data from GCS:", error);
  }

  return (
    <Layout>
      <div className="min-h-screen py-12">
        <NewsClientPage initialArticles={initialArticles} />
      </div>
    </Layout>
  )
}

export default NewsPage