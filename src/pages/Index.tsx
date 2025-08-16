import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, TrendingUp, Globe } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [celebrityQuestions, setCelebrityQuestions] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  // Mock data for trending celebrities and their questions with search counts
  const trendingCelebrities = [
    { name: "Taylor Swift", searchCount: "45.2M", questions: ["Taylor Swift net worth", "Taylor Swift tour dates", "Taylor Swift boyfriend"] },
    { name: "Elon Musk", searchCount: "38.7M", questions: ["Elon Musk Twitter", "Elon Musk net worth", "Elon Musk companies"] },
    { name: "Kim Kardashian", searchCount: "32.1M", questions: ["Kim Kardashian business", "Kim Kardashian children", "Kim Kardashian husband"] },
    { name: "Cristiano Ronaldo", searchCount: "29.8M", questions: ["Cristiano Ronaldo goals", "Cristiano Ronaldo salary", "Cristiano Ronaldo team"] },
    { name: "Ariana Grande", searchCount: "27.4M", questions: ["Ariana Grande songs", "Ariana Grande tour", "Ariana Grande perfume"] },
    { name: "Dwayne Johnson", searchCount: "25.9M", questions: ["Dwayne Johnson movies", "Dwayne Johnson workout", "Dwayne Johnson business"] },
    { name: "Selena Gomez", searchCount: "24.3M", questions: ["Selena Gomez music", "Selena Gomez makeup", "Selena Gomez relationship"] },
    { name: "Justin Bieber", searchCount: "23.1M", questions: ["Justin Bieber songs", "Justin Bieber wife", "Justin Bieber tour"] },
    { name: "Beyoncé", searchCount: "22.7M", questions: ["Beyoncé tour", "Beyoncé new album", "Beyoncé net worth"] },
    { name: "Leonardo DiCaprio", searchCount: "21.5M", questions: ["Leonardo DiCaprio movies", "Leonardo DiCaprio girlfriend", "Leonardo DiCaprio awards"] },
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

  const handleQuestionClick = (question: string) => {
    // Mock answer - in real implementation, this would fetch from API
    setSelectedAnswer(`Here's a mock answer for "${question}". For real-time data and actual answers, connect to Supabase backend.`);
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

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="celebrity-search" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="celebrity-search" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Celebrity Search
            </TabsTrigger>
            <TabsTrigger value="trending-celebrities" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Trending Celebrities
            </TabsTrigger>
            <TabsTrigger value="top-websites" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Top Websites
            </TabsTrigger>
          </TabsList>

          {/* Tab 1: Celebrity Search Questions */}
          <TabsContent value="celebrity-search">
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
                      <div 
                        key={index} 
                        className="p-3 bg-muted rounded-md cursor-pointer hover:bg-muted/80 transition-colors"
                        onClick={() => handleQuestionClick(question)}
                      >
                        {index + 1}. {question}
                      </div>
                    ))}
                  </div>
                )}

                {selectedAnswer && (
                  <div className="mt-4 p-4 bg-accent rounded-md">
                    <h4 className="font-semibold mb-2">Answer:</h4>
                    <p className="text-sm">{selectedAnswer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 2: Trending Celebrities */}
          <TabsContent value="trending-celebrities">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <TrendingUp className="h-6 w-6" />
                  Top 10 Trending Celebrities & Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                  {trendingCelebrities.map((celebrity, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">#{index + 1} {celebrity.name}</h3>
                        <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                          {celebrity.searchCount} searches
                        </span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground mb-2">Top Questions:</p>
                        {celebrity.questions.map((question, qIndex) => (
                          <div 
                            key={qIndex} 
                            className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors p-1 rounded hover:bg-muted/50"
                            onClick={() => handleQuestionClick(question)}
                          >
                            • {question}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {selectedAnswer && (
                  <div className="mt-6 p-4 bg-accent rounded-md">
                    <h4 className="font-semibold mb-2">Answer:</h4>
                    <p className="text-sm">{selectedAnswer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 3: Top Websites */}
          <TabsContent value="top-websites">
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
