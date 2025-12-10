import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { members, MemberProfile as MemberProfileType } from "@/data/members";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Building2, Microscope, User, Linkedin, Twitter, FileText } from "lucide-react";
import { Link } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";

interface Publication {
  uid: string;
  title: string;
  source: string;
  pubdate: string;
  authors: { name: string }[];
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
}

export default function MemberProfile() {
  const [, params] = useRoute("/team/:id");
  const memberId = params?.id;
  const member = members.find((m) => m.id === memberId);

  const [publications, setPublications] = useState<Publication[]>([]);
  const [loadingPubs, setLoadingPubs] = useState(true);
  const [pubError, setPubError] = useState<string | null>(null);

  useEffect(() => {
    if (!member) return;

    const fetchPublications = async () => {
      setLoadingPubs(true);
      setPubError(null);
      try {
        // 1. Search for IDs
        const searchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encodeURIComponent(
          member.pubmedSearchTerm
        )}&retmode=json&retmax=10&sort=date`;
        
        const searchRes = await fetch(searchUrl);
        const searchData = await searchRes.json();
        
        if (!searchData.esearchresult?.idlist?.length) {
          setPublications([]);
          setLoadingPubs(false);
          return;
        }

        const ids = searchData.esearchresult.idlist.join(",");

        // 2. Fetch details
        const summaryUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${ids}&retmode=json`;
        const summaryRes = await fetch(summaryUrl);
        const summaryData = await summaryRes.json();

        const pubs = Object.values(summaryData.result)
          .filter((item: any) => item.uid) // Filter out non-publication keys
          .map((item: any) => ({
            uid: item.uid,
            title: item.title,
            source: item.source,
            pubdate: item.pubdate,
            authors: item.authors || [],
            volume: item.volume,
            issue: item.issue,
            pages: item.pages,
            doi: item.elocationid?.replace("doi: ", ""),
          }));

        setPublications(pubs);
      } catch (err) {
        console.error("Error fetching publications:", err);
        setPubError("Failed to load publications from PubMed.");
      } finally {
        setLoadingPubs(false);
      }
    };

    fetchPublications();
  }, [member]);

  if (!member) {
    return (
      <div className="container py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Member Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The team member you are looking for does not exist.
        </p>
        <Link href="/team">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Team
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary/5 py-12 md:py-20">
        <div className="container">
          <Link href="/team">
            <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Team
            </Button>
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border-4 border-background shadow-xl">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User className="w-16 h-16 md:w-24 md:h-24 text-primary/40" />
              )}
            </div>
            
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                {member.name}
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="text-lg px-4 py-1">
                  {member.role}
                </Badge>
              </div>
              <div className="space-y-2 text-lg text-muted-foreground mb-6">
                {member.titles.map((title, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span>{title}</span>
                  </div>
                ))}
              </div>

              {member.social && (
                <div className="flex gap-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full hover:text-[#0077b5] hover:border-[#0077b5]">
                        <Linkedin className="w-5 h-5" />
                      </Button>
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full hover:text-black hover:border-black">
                        <Twitter className="w-5 h-5" />
                      </Button>
                    </a>
                  )}
                  {member.social.orcid && (
                    <a href={`https://orcid.org/${member.social.orcid}`} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full hover:text-[#A6CE39] hover:border-[#A6CE39]">
                        <span className="font-bold text-xs">iD</span>
                      </Button>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Biography */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <User className="w-6 h-6 text-primary" />
                Biography
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>{member.bio}</p>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Microscope className="w-6 h-6 text-primary" />
                Key Projects & Trials
              </h2>
              <div className="grid gap-6">
                {member.projects.map((project, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <Badge variant="outline">{project.role}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Publications */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                Recent Publications
              </h2>
              
              {loadingPubs ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                  ))}
                </div>
              ) : pubError ? (
                <div className="p-4 bg-destructive/10 text-destructive rounded-lg">
                  {pubError}
                </div>
              ) : publications.length === 0 ? (
                <p className="text-muted-foreground">No recent publications found.</p>
              ) : (
                <div className="space-y-6">
                  {publications.map((pub) => (
                    <Card key={pub.uid} className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
                          <a 
                            href={`https://pubmed.ncbi.nlm.nih.gov/${pub.uid}/`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {pub.title}
                          </a>
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {pub.authors.map((a) => a.name).join(", ")}
                        </p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">{pub.source}</span>
                          <span>{new Date(pub.pubdate).getFullYear()}</span>
                          {pub.volume && <span>Vol. {pub.volume}</span>}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <div className="mt-6">
                    <Button variant="outline" asChild>
                      <a 
                        href={`https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(member.pubmedSearchTerm)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View All on PubMed
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card className="bg-primary/5 border-none">
              <CardHeader>
                <CardTitle>Research Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {member.researchInterests.map((interest, index) => (
                    <Badge key={index} variant="secondary" className="bg-background">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
