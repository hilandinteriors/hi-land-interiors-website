import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'Google-Extended', 'anthropic-ai'],
        allow: '/',
      }
    ],
    sitemap: 'https://www.hilandinteriors.ca/sitemap.xml',
  }
}
