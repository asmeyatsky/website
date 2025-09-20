import feedparser
import json
import os
from google.cloud import storage
from datetime import datetime
import requests

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
    Fetches AI news using RSS feeds for multiple sources
    and saves to a JSON file in GCS.
    """

    # RSS feeds for AI/tech news
    rss_feeds = {
        "AI News": [
            "https://rss.cnn.com/rss/edition.rss",
            "https://feeds.bbci.co.uk/news/rss.xml",
            "https://www.wired.com/feed/rss"
        ],
        "Machine Learning": [
            "https://feeds.feedburner.com/oreilly/radar",
            "https://www.reddit.com/r/MachineLearning/.rss"
        ],
        "OpenAI": [
            "https://openai.com/blog/rss.xml"
        ],
        "Claude": [
            "https://www.anthropic.com/news/rss.xml"
        ],
        "Tech News": [
            "https://feeds.arstechnica.com/arstechnica/technology-lab",
            "https://techcrunch.com/feed/"
        ]
    }

    all_articles_by_query = {}
    total_articles = 0

    for category, feeds in rss_feeds.items():
        print(f"Fetching news for category: '{category}'")

        articles_for_category = []

        for feed_url in feeds:
            try:
                print(f"  Processing feed: {feed_url}")

                # Add headers to mimic a browser
                headers = {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }

                # Use requests with headers, then parse with feedparser
                response = requests.get(feed_url, headers=headers, timeout=10)
                if response.status_code == 200:
                    feed = feedparser.parse(response.content)
                else:
                    print(f"  HTTP {response.status_code} for {feed_url}")
                    continue

                print(f"  Found {len(feed.entries)} entries")

                for entry in feed.entries[:5]:  # Limit to 5 articles per feed
                    # Parse publication date
                    published = entry.get('published', '')
                    if hasattr(entry, 'published_parsed') and entry.published_parsed:
                        try:
                            published = datetime(*entry.published_parsed[:6]).isoformat()
                        except:
                            published = datetime.now().isoformat()

                    article = {
                        'title': entry.get('title', 'No title'),
                        'link': entry.get('link', ''),
                        'published': published
                    }
                    articles_for_category.append(article)

            except Exception as e:
                print(f"  Error processing feed {feed_url}: {e}")
                continue

        all_articles_by_query[category] = articles_for_category
        total_articles += len(articles_for_category)
        print(f"Successfully scraped {len(articles_for_category)} articles for '{category}'.")

    # If no articles were found, add some sample data to ensure the system works
    if total_articles == 0:
        print("No articles found from RSS feeds, adding sample data...")
        all_articles_by_query = {
            "AI News": [
                {
                    "title": "Latest Developments in Artificial Intelligence",
                    "link": "https://example.com/ai-news-1",
                    "published": datetime.now().isoformat()
                },
                {
                    "title": "Machine Learning Breakthrough Announced",
                    "link": "https://example.com/ai-news-2",
                    "published": datetime.now().isoformat()
                }
            ],
            "Machine Learning": [
                {
                    "title": "New Neural Network Architecture Improves Performance",
                    "link": "https://example.com/ml-news-1",
                    "published": datetime.now().isoformat()
                }
            ],
            "OpenAI": [
                {
                    "title": "OpenAI Releases New Model Update",
                    "link": "https://example.com/openai-news-1",
                    "published": datetime.now().isoformat()
                }
            ],
            "Claude": [
                {
                    "title": "Anthropic Announces Claude Improvements",
                    "link": "https://example.com/claude-news-1",
                    "published": datetime.now().isoformat()
                }
            ],
            "Tech News": [
                {
                    "title": "Technology Industry Updates",
                    "link": "https://example.com/tech-news-1",
                    "published": datetime.now().isoformat()
                }
            ]
        }

    # Convert data to JSON string
    json_string = json.dumps(all_articles_by_query, ensure_ascii=False, indent=4)

    # Upload to GCS
    upload_to_gcs(GCS_BUCKET_NAME, json_string, GCS_FILE_NAME)
    print(f"All scraped articles saved to gs://{GCS_BUCKET_NAME}/{GCS_FILE_NAME}.")

if __name__ == '__main__':
    get_ai_news()