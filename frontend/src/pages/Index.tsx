import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, TrendingUp, Globe, Star, Zap, Users } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [celebrityQuestions, setCelebrityQuestions] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  // Enhanced trending celebrities with detailed data
  const trendingCelebrities = [
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
    { 
      name: "Elon Musk", 
      searchCount: "38.7M", 
      category: "Tech",
      questions: [
        "Elon Musk Twitter X platform changes",
        "What companies does Elon Musk own?",
        "Elon Musk net worth 2024",
        "Tesla stock price prediction by Elon Musk",
        "SpaceX Mars mission timeline"
      ],
      answers: {
        "Elon Musk Twitter X platform changes": "Musk rebranded Twitter to X and introduced various changes including verification system updates and content policies.",
        "What companies does Elon Musk own?": "Elon Musk owns Tesla, SpaceX, X (formerly Twitter), Neuralink, and The Boring Company.",
        "Elon Musk net worth 2024": "Elon Musk's net worth fluctuates around $200-250 billion, making him one of the richest people in the world.",
        "Tesla stock price prediction by Elon Musk": "Musk rarely gives specific stock predictions but has expressed long-term optimism about Tesla's growth.",
        "SpaceX Mars mission timeline": "SpaceX aims to send humans to Mars in the late 2020s, with unmanned missions planned earlier."
      }
    },
    { 
      name: "Kim Kardashian", 
      searchCount: "32.1M", 
      category: "Reality TV",
      questions: [
        "Kim Kardashian SKIMS business success",
        "How many children does Kim Kardashian have?",
        "Kim Kardashian Pete Davidson relationship",
        "Kim Kardashian skincare routine",
        "Kim Kardashian law school journey"
      ],
      answers: {
        "Kim Kardashian SKIMS business success": "SKIMS, her shapewear and loungewear brand, is valued at over $4 billion and has become hugely successful.",
        "How many children does Kim Kardashian have?": "Kim Kardashian has four children: North, Saint, Chicago, and Psalm with ex-husband Kanye West.",
        "Kim Kardashian Pete Davidson relationship": "Kim and Pete dated from 2021-2022 but have since ended their relationship.",
        "Kim Kardashian skincare routine": "She follows a multi-step routine including cleansing, serums, moisturizers, and sun protection.",
        "Kim Kardashian law school journey": "Kim is studying law through apprenticeship and has passed the baby bar exam, working toward becoming a lawyer."
      }
    },
    { 
      name: "Cristiano Ronaldo", 
      searchCount: "29.8M", 
      category: "Sports",
      questions: [
        "Cristiano Ronaldo total career goals",
        "How much does Cristiano Ronaldo earn?",
        "Which team does Cristiano Ronaldo play for?",
        "Cristiano Ronaldo workout routine",
        "Cristiano Ronaldo family and children"
      ],
      answers: {
        "Cristiano Ronaldo total career goals": "Cristiano Ronaldo has scored over 850 career goals for club and country, making him one of the highest scorers in football history.",
        "How much does Cristiano Ronaldo earn?": "He earns approximately $200+ million annually from salary and endorsements at Al Nassr.",
        "Which team does Cristiano Ronaldo play for?": "Cristiano Ronaldo currently plays for Al Nassr in the Saudi Pro League.",
        "Cristiano Ronaldo workout routine": "His routine includes cardio, strength training, pilates, and strict diet with 5-6 small meals daily.",
        "Cristiano Ronaldo family and children": "He has five children: Cristiano Jr., twins Eva and Mateo, Alana Martina with Georgina Rodriguez, and Bella Esmeralda."
      }
    },
    { 
      name: "Ariana Grande", 
      searchCount: "27.4M", 
      category: "Music",
      questions: [
        "Ariana Grande new songs 2024",
        "Ariana Grande Wicked movie role",
        "Ariana Grande perfume collection",
        "Ariana Grande vocal range ability",
        "Ariana Grande relationship status"
      ],
      answers: {
        "Ariana Grande new songs 2024": "Ariana has been working on new music while filming Wicked, with fans eagerly awaiting new releases.",
        "Ariana Grande Wicked movie role": "She plays Glinda the Good Witch in the upcoming Wicked movie adaptation alongside Cynthia Erivo.",
        "Ariana Grande perfume collection": "Her fragrance line includes popular scents like Cloud, Thank U Next, and R.E.M.",
        "Ariana Grande vocal range ability": "She has a four-octave vocal range and is known for her whistle register capabilities.",
        "Ariana Grande relationship status": "She is currently married to real estate agent Dalton Gomez."
      }
    },
    { 
      name: "Dwayne Johnson", 
      searchCount: "25.9M", 
      category: "Entertainment",
      questions: [
        "Dwayne Johnson latest movies 2024",
        "The Rock workout and diet plan",
        "Dwayne Johnson business ventures",
        "How tall is Dwayne Johnson?",
        "Dwayne Johnson family background"
      ],
      answers: {
        "Dwayne Johnson latest movies 2024": "Recent and upcoming projects include Red One, Black Adam franchise, and various action films in development.",
        "The Rock workout and diet plan": "His routine includes 6-day strength training, cardio, and a high-protein diet with 5-7 meals daily.",
        "Dwayne Johnson business ventures": "He owns Teremana Tequila, XFL football league, and has partnerships with Under Armour and other brands.",
        "How tall is Dwayne Johnson?": "Dwayne Johnson is 6 feet 5 inches (196 cm) tall.",
        "Dwayne Johnson family background": "He comes from a wrestling family - his father Rocky Johnson and grandfather Peter Maivia were both professional wrestlers."
      }
    }
  ];

  // Top websites with detailed metrics
  const topWebsites = [
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

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    setTimeout(() => {
      setCelebrityQuestions([
        `What is ${searchQuery}'s net worth in 2024?`,
        `How old is ${searchQuery}?`,
        `${searchQuery} height and weight`,
        `${searchQuery} latest movies/songs`,
        `${searchQuery} personal life and relationships`,
        `${searchQuery} latest news and updates`,
        `${searchQuery} social media accounts`,
        `${searchQuery} awards and achievements`
      ]);
      setIsSearching(false);
    }, 1000);
  };

  const handleQuestionClick = (question: string, celebrity?: any) => {
    if (celebrity && celebrity.answers && celebrity.answers[question]) {
      setSelectedAnswer(celebrity.answers[question]);
    } else {
      setSelectedAnswer(`Here's what people are searching about "${question}". This represents one of the most popular queries related to this topic based on search trends and user interest.`);
    }
  };

  // Google Ads placeholder component
  const GoogleAd = ({ size, className }: { size: string; className?: string }) => (
    <div className={`bg-gradient-card border border-border rounded-lg p-4 text-center animate-fade-in ${className}`}>
      <div className="text-muted-foreground text-sm mb-2">Advertisement</div>
      <div className="bg-muted/30 rounded-md p-8 border-2 border-dashed border-muted-foreground/20">
        <div className="text-muted-foreground/60 text-xs">Google Ads {size}</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="flex justify-between items-start mb-8">
            <div></div>
            <ThemeToggle />
          </div>
          <div className="text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 animate-glow-pulse">
                SearchTrends Pro
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Discover what the world is searching for with real-time celebrity insights, trending questions, and web analytics
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>45M+ Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>Real-time Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary" />
                  <span>Trending Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 pb-12">
        {/* Top Ad Space */}
        <GoogleAd size="728x90 Leaderboard" className="mb-8" />
        <Tabs defaultValue="celebrity-search" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-card shadow-card">
            <TabsTrigger value="celebrity-search" className="flex items-center gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
              <Search className="h-4 w-4" />
              Celebrity Search
            </TabsTrigger>
            <TabsTrigger value="trending-celebrities" className="flex items-center gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
              <TrendingUp className="h-4 w-4" />
              Trending Celebrities
            </TabsTrigger>
            <TabsTrigger value="top-websites" className="flex items-center gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
              <Globe className="h-4 w-4" />
              Top Websites
            </TabsTrigger>
          </TabsList>

          {/* Tab 1: Celebrity Search Questions */}
          <TabsContent value="celebrity-search" className="animate-fade-in">
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <Card className="bg-gradient-card shadow-card border-0">
                  <CardHeader className="text-center bg-gradient-primary/10 rounded-t-lg">
                    <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                      <Search className="h-6 w-6 text-primary" />
                      Celebrity Search Intelligence
                    </CardTitle>
                    <p className="text-muted-foreground">Get instant insights on what people are asking about any celebrity</p>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="flex gap-3">
                      <Input
                        placeholder="Enter celebrity name (e.g., Taylor Swift, Elon Musk)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        className="text-lg py-3 bg-background/50 border-primary/20 focus:border-primary"
                      />
                      <Button 
                        onClick={handleSearch} 
                        disabled={isSearching}
                        className="px-8 py-3 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      >
                        {isSearching ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Analyzing...
                          </div>
                        ) : "Search"}
                      </Button>
                    </div>
                    
                    {celebrityQuestions.length > 0 && (
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          Top questions about {searchQuery}:
                        </h3>
                        <div className="grid gap-3">
                          {celebrityQuestions.map((question, index) => (
                            <div 
                              key={index} 
                              className="group p-4 bg-background/30 backdrop-blur-sm rounded-xl cursor-pointer hover:bg-primary/10 hover:shadow-glow transition-all duration-300 border border-border/50 hover:border-primary/50"
                              onClick={() => handleQuestionClick(question)}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                                  {index + 1}
                                </div>
                                <span className="group-hover:text-primary transition-colors duration-300">{question}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedAnswer && (
                      <div className="mt-6 p-6 bg-gradient-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 animate-fade-in">
                        <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
                          <Star className="h-4 w-4" />
                          Search Insight:
                        </h4>
                        <p className="text-foreground leading-relaxed">{selectedAnswer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              {/* Side Ad */}
              <div className="lg:col-span-1">
                <GoogleAd size="300x600 Half Page" />
              </div>
            </div>
          </TabsContent>

          {/* Tab 2: Trending Celebrities */}
          <TabsContent value="trending-celebrities" className="animate-fade-in">
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <Card className="bg-gradient-card shadow-card border-0">
                  <CardHeader className="text-center bg-gradient-primary/10 rounded-t-lg">
                    <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                      <TrendingUp className="h-6 w-6 text-primary" />
                      Top 6 Trending Celebrities & Their Questions
                    </CardTitle>
                    <p className="text-muted-foreground">Real-time insights into the most searched celebrities and what people want to know</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {trendingCelebrities.map((celebrity, index) => (
                        <Card key={index} className="bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg text-foreground">{celebrity.name}</CardTitle>
                              <div className="text-right">
                                <div className="text-primary font-bold text-sm">{celebrity.searchCount}</div>
                                <div className="text-muted-foreground text-xs">{celebrity.category}</div>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            {celebrity.questions.map((question, qIndex) => (
                              <div 
                                key={qIndex} 
                                className="p-3 bg-background/30 rounded-lg cursor-pointer hover:bg-primary/10 transition-all duration-300 border border-border/30 hover:border-primary/30"
                                onClick={() => handleQuestionClick(question, celebrity)}
                              >
                                <div className="flex items-start gap-2">
                                  <div className="w-5 h-5 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs mt-0.5">
                                    {qIndex + 1}
                                  </div>
                                  <span className="text-sm text-foreground hover:text-primary transition-colors duration-300 leading-relaxed">{question}</span>
                                </div>
                              </div>
                            ))}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    {selectedAnswer && (
                      <div className="mt-6 p-6 bg-gradient-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 animate-fade-in">
                        <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
                          <Star className="h-4 w-4" />
                          Answer:
                        </h4>
                        <p className="text-foreground leading-relaxed">{selectedAnswer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              {/* Side Ad */}
              <div className="lg:col-span-1">
                <GoogleAd size="300x250 Medium Rectangle" />
              </div>
            </div>
          </TabsContent>

          {/* Tab 3: Top Websites */}
          <TabsContent value="top-websites" className="animate-fade-in">
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <Card className="bg-gradient-card shadow-card border-0">
                  <CardHeader className="text-center bg-gradient-primary/10 rounded-t-lg">
                    <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                      <Globe className="h-6 w-6 text-primary" />
                      Top 10 Most Visited Websites Globally
                    </CardTitle>
                    <p className="text-muted-foreground">Daily traffic and category insights for the world's most popular websites</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {topWebsites.map((website, index) => (
                        <div 
                          key={index} 
                          className="p-4 bg-background/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                                {index + 1}
                              </div>
                              <div>
                                <div className="font-semibold text-foreground text-lg">{website.name}</div>
                                <div className="text-muted-foreground text-sm">{website.category}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-primary font-bold text-lg">{website.dailyVisits}</div>
                              <div className="text-muted-foreground text-xs">Daily Visits</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Side Ad */}
              <div className="lg:col-span-1">
                <GoogleAd size="300x250 Medium Rectangle" />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom Ad Space */}
        <GoogleAd size="728x90 Footer Banner" className="mt-8" />
      </div>
    </div>
  );
};

export default Index;