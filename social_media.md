# Social Media Cross-Posting Automation Plan

## 1. Project Overview

The goal is to automate the process of sharing new blog posts from the Contentful CMS to multiple social media platforms: LinkedIn, Twitter (X), and Instagram.

This will be achieved by creating a webhook in Contentful that triggers a custom API endpoint in the Next.js application whenever a new post is published.

## 2. Implementation Strategy

The automation flow is as follows:

1.  **Contentful Webhook**: A webhook will be configured in the Contentful space to trigger on the "Entry > Publish" event for the "Post" content type.
2.  **Next.js API Route**: The webhook will send a `POST` request to a new, unified API endpoint: `/api/cross-post`.
3.  **Cross-Posting Logic**: This endpoint will receive the post data and execute individual functions to share the content on each social media platform in parallel.
4.  **Secure Credentials**: All API keys, tokens, and secrets for the social media platforms will be stored securely as environment variables in the deployment environment.

## 3. Platform-Specific API Requirements

Here are the technical requirements and implementation details for each platform.

### LinkedIn

*   **API**: **Posts API** (part of the Marketing Developer Platform)
*   **Endpoint**: `POST /rest/posts`
*   **Account Requirements**:
    *   A **LinkedIn Company Page** is mandatory. You cannot post to a personal profile via this API.
    *   Your LinkedIn Developer App must be reviewed and approved for access to the **Marketing Developer Platform**.
    *   The authenticated user (whose token is used) must be an **Admin** of the Company Page.
*   **Authentication**: OAuth 2.0 with the `w_organization_social` scope.
*   **Posting Process**:
    1.  Obtain an access token for an admin of the page.
    2.  Send a `POST` request to the `/rest/posts` endpoint.
    3.  The request body must include the `owner` as the organization's URN (e.g., `urn:li:organization:12345`) and the content to be shared (text and article link).

### Instagram

*   **API**: **Instagram Content Publishing API** (part of the Instagram Graph API)
*   **Endpoint**: `POST /{ig-user-id}/media` followed by `POST /{ig-user-id}/media_publish`
*   **Account Requirements**:
    *   An **Instagram Business Account** is mandatory. Creator or Personal accounts are not supported.
    *   Your app must be reviewed and approved by Meta.
*   **Authentication**: OAuth 2.0 access token.
*   **Content Limitations**:
    *   Only **JPEG** images are supported. The blog post's main image must be a JPEG and accessible via a public URL.
    *   Does not support publishing Reels or Stories directly.
*   **Posting Process** (2-Step):
    1.  **Create Media Container**: Send a `POST` request to `/{ig-user-id}/media` with the `image_url` and `caption`. This returns a `creation_id`.
    2.  **Publish Media**: Send a `POST` request to `/{ig-user-id}/media_publish` with the `creation_id` from the previous step to publish the image to the feed.

### Twitter (X)

*   **API**: **Twitter API v2**
*   **Endpoint**: `POST /2/tweets`
*   **Account Requirements**: A Twitter developer account with an approved project and app.
*   **Authentication**: OAuth 2.0 (or OAuth 1.0a).
*   **Content Limitations**:
    *   Standard character limits (280 characters) apply. The post title and summary must be concise.
*   **Posting Process**:
    1.  Obtain the necessary API keys and access tokens.
    2.  Construct the tweet content (e.g., "New Post: {Title} {URL}").
    3.  Send a `POST` request to the `/2/tweets` endpoint with the text.
    4.  (Optional) To include an image, you must first upload it using the `v1.1` media upload endpoint and then attach the returned `media_id` to your v2 tweet.

## 4. Action Items

1.  **Create Developer Apps**:
    *   [ ] Create a LinkedIn Developer App and apply for Marketing Developer Platform access.
    *   [ ] Create a Meta for Developers App for Instagram.
    *   [ ] Create a Twitter Developer App.
2.  **Obtain Credentials**:
    *   [ ] Get the Client ID, Client Secret, and Organization ID for LinkedIn.
    *   [ ] Get the App ID, App Secret, and create a test Instagram Business Account.
    *   [ ] Get the API Key, API Secret, and Access Tokens for Twitter.
3.  **Environment Variables**:
    *   [ ] Add all credentials to your project's environment variables (`.env.local` for development and in your cloud provider's settings for production).
4.  **Implement API Route**:
    *   [ ] Create the `/src/app/api/cross-post/route.ts` file.
    *   [ ] Implement the logic to call each platform's API using the stored credentials.
5.  **Configure Webhook**:
    *   [ ] In Contentful, create a new webhook pointing to `https://<your-domain>/api/cross-post` that triggers on post publishing.
