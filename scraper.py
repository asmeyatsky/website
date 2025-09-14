from gnews import GNews # Corrected import
import json
import os
from google.cloud import storage

# Define the GCS bucket name
GCS_BUCKET_NAME = "website-469906-ai-news"
GCS_FILE_NAME = "ai_news.json"

def upload_to_gcs(bucket_name, source_string, destination_blob_name):
    """Uploads a string to a GCS bucket."""
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)

    blob.upload_from_string(source_string, content_type="application/json")

    print(f"String uploaded to gs://{bucket_name}/{destination_blob_name}")

def get_ai_news():
    """
    Fetches AI news using GNews for multiple search queries
    and saves to a JSON file in GCS.
    """
    gn = GNews(language='en', country='US')
    
    # Load search queries from search_config.json
    config_file_path = 'search_config.json'
    if not os.path.exists(config_file_path):
        print(f"Error: {config_file_path} not found. Please create it with your search terms.")
        return

    with open(config_file_path, 'r', encoding='utf-8') as f:
        search_queries = json.load(f)

    all_articles_by_query = {}

    for query in search_queries:
        print(f"Fetching news for query: '{query}'")
        
        articles_for_query = []
        gnews_articles = gn.get_news(query)
        
        if gnews_articles:
            for article_data in gnews_articles:
                article = {
                    'title': article_data.get('title'),
                    'link': article_data.get('url'),
                    'published': article_data.get('published date')
                }
                articles_for_query.append(article)
        all_articles_by_query[query] = articles_for_query
        print(f"Successfully scraped {len(articles_for_query)} articles for '{query}'.")

    # Convert data to JSON string
    json_string = json.dumps(all_articles_by_query, ensure_ascii=False, indent=4)
    
    # Upload to GCS
    upload_to_gcs(GCS_BUCKET_NAME, json_string, GCS_FILE_NAME)
    print(f"All scraped articles saved to gs://{GCS_BUCKET_NAME}/{GCS_FILE_NAME}.")

if __name__ == '__main__':
    get_ai_news()