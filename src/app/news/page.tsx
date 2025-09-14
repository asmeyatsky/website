import Layout from '@/components/Layout'
import NewsClientPage from '@/components/NewsClientPage'
import { Storage } from '@google-cloud/storage';

// Define the structure of an article
interface NewsArticle {
  title: string;
  link: string;
  published: string;
  category: string;
}

const NewsPage = async () => {
  // Use environment variables for GCS bucket and file names
  const GCS_BUCKET_NAME = process.env.GCS_BUCKET_NAME || "website-469906-ai-news";
  const GCS_FILE_NAME = process.env.GCS_FILE_NAME || "ai_news.json";
  let initialArticles: NewsArticle[] = [];

  console.log("NewsPage: Starting data fetch..."); // Log 1

  try {
    console.log(`NewsPage: Attempting to fetch from gs://${GCS_BUCKET_NAME}/${GCS_FILE_NAME}`); // Log 2
    const storage = new Storage();
    const bucket = storage.bucket(GCS_BUCKET_NAME);
    const file = bucket.file(GCS_FILE_NAME);

    console.log("NewsPage: Attempting to download file..."); // Log 3
    const [contents] = await file.download(); // Download file contents
    console.log("NewsPage: File downloaded successfully."); // Log 4

    const data = JSON.parse(contents.toString('utf8')); // Parse as JSON
    console.log("NewsPage: Data parsed successfully."); // Log 5

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
    console.log(`NewsPage: Flattened ${initialArticles.length} articles.`); // Log 6

  } catch (error) {
    console.error("NewsPage: Error fetching or parsing news data from GCS:", error); // Log 7
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