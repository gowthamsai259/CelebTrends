import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, TrendingUp, Globe } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [celebrityQuestions, setCelebrityQuestions] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Mock data for trending celebrities and their questions
  const trendingCelebrities = [
    { name: "Taylor Swift", questions: ["Taylor Swift net worth", "Taylor Swift tour dates", "Taylor Swift boyfriend"] },
    { name: "Elon Musk", questions: ["Elon Musk Twitter", "Elon Musk net worth", "Elon Musk companies"] },
    { name: "Kim Kardashian", questions: ["Kim Kardashian business", "Kim Kardashian children", "Kim Kardashian husband"] },
    { name: "Cristiano Ronaldo", questions: ["Cristiano Ronaldo goals", "Cristiano Ronaldo salary", "Cristiano Ronaldo team"] },
    { name: "Ariana Grande", questions: ["Ariana Grande songs", "Ariana Grande tour", "Ariana Grande perfume"] },
  ];

  // Mock data for top websites
  const topWebsites = [
    "google.com", "youtube.com", "facebook.com", "instagram.com", "twitter.com",
    "linkedin.com", "tiktok.com", "amazon.com", "netflix.com", "reddit.com"
  ];

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    // Mock search results - in real implementation, this would call an API
    setTimeout(() => {
      setCelebrityQuestions([
        `${searchQuery} net worth`,
        `${searchQuery} age`,
        `${searchQuery} height`,
        `${searchQuery} movies`,
        `${searchQuery} personal life`,
        `${searchQuery} latest news`,
        `${searchQuery} social media`,
        `${searchQuery} awards`
      ]);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center text-foreground">
            Trending Search Analytics
          </h1>
          <p className="text-muted-foreground text-center mt-2">
            Discover what people are searching for
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Feature 1: Celebrity Search Questions */}
        <section>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Search className="h-6 w-6" />
                Celebrity Search Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter celebrity name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Button onClick={handleSearch} disabled={isSearching}>
                  {isSearching ? "Searching..." : "Search"}
                </Button>
              </div>
              
              {celebrityQuestions.length > 0 && (
                <div className="grid gap-2">
                  <h3 className="font-semibold">Top questions about {searchQuery}:</h3>
                  {celebrityQuestions.map((question, index) => (
                    <div key={index} className="p-3 bg-muted rounded-md">
                      {index + 1}. {question}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Feature 2: Trending Celebrities */}
        <section>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Top 10 Trending Celebrities & Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {trendingCelebrities.map((celebrity, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <h3 className="font-semibold mb-2">#{index + 1} {celebrity.name}</h3>
                    <div className="space-y-1">
                      {celebrity.questions.map((question, qIndex) => (
                        <div key={qIndex} className="text-sm text-muted-foreground">
                          • {question}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Feature 3: Top Websites */}
        <section>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Globe className="h-6 w-6" />
                Top 10 Most Searched Websites
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
                {topWebsites.map((website, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-md">
                    <span className="font-medium">#{index + 1}</span>
                    <span className="text-sm">{website}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
