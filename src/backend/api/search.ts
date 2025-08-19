// Backend API utilities for search functionality
// This would handle search-related operations in a real backend

export interface CelebrityData {
  name: string;
  searchCount: string;
  category: string;
  questions: string[];
  answers: Record<string, string>;
}

export interface WebsiteData {
  name: string;
  category: string;
  dailyVisits: string;
}

// Mock data service - in a real backend, this would fetch from a database
export class SearchService {
  static async getCelebrityQuestions(celebrityName: string): Promise<string[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return [
      `What is ${celebrityName}'s net worth in 2024?`,
      `How old is ${celebrityName}?`,
      `${celebrityName} height and weight`,
      `${celebrityName} latest movies/songs`,
      `${celebrityName} personal life and relationships`,
      `${celebrityName} latest news and updates`,
      `${celebrityName} social media accounts`,
      `${celebrityName} awards and achievements`
    ];
  }

  static async getTrendingCelebrities(): Promise<CelebrityData[]> {
    return [
      {
        name: "Taylor Swift",
        searchCount: "45.2M",
        category: "Music",
        questions: [
          "What is Taylor Swift's net worth in 2024?",
          "Taylor Swift Eras Tour dates and tickets",
          "Who is Taylor Swift dating now?",
          "Taylor Swift latest album songs",
          "Taylor Swift concert outfit ideas"
        ],
        answers: {
          "What is Taylor Swift's net worth in 2024?": "Taylor Swift's net worth is estimated at $740 million as of 2024, making her one of the wealthiest musicians globally.",
          "Taylor Swift Eras Tour dates and tickets": "The Eras Tour continues through 2024 with dates in major cities worldwide. Check official sources for availability.",
          "Who is Taylor Swift dating now?": "Taylor Swift is currently in a relationship with NFL player Travis Kelce.",
          "Taylor Swift latest album songs": "Her latest releases include re-recorded versions and new tracks from The Tortured Poets Department.",
          "Taylor Swift concert outfit ideas": "Fans often wear sparkly dresses, cowboy boots, and themed outfits representing different album eras."
        }
      },
      // Add more celebrities as needed
    ];
  }

  static async getTopWebsites(): Promise<WebsiteData[]> {
    return [
      { name: "google.com", category: "Search", dailyVisits: "8.5B" },
      { name: "youtube.com", category: "Video", dailyVisits: "2.7B" },
      { name: "facebook.com", category: "Social", dailyVisits: "2.1B" },
      { name: "instagram.com", category: "Social", dailyVisits: "1.9B" },
      { name: "twitter.com", category: "Social", dailyVisits: "1.2B" },
      { name: "linkedin.com", category: "Professional", dailyVisits: "900M" },
      { name: "tiktok.com", category: "Video", dailyVisits: "850M" },
      { name: "amazon.com", category: "E-commerce", dailyVisits: "750M" },
      { name: "netflix.com", category: "Streaming", dailyVisits: "600M" },
      { name: "reddit.com", category: "Forum", dailyVisits: "550M" }
    ];
  }
}