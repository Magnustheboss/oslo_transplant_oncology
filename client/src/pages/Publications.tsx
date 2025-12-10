import { useEffect, useState } from "react";
import { ArrowRight, FileText, ExternalLink, BookOpen, Calendar, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Define the authors to search for
// Using a simpler query that is less likely to fail due to URL encoding issues or strict syntax
const AUTHORS_QUERY = 'Line PD[Author] OR Dueland S[Author] OR Smedman TM[Author] OR Yaqub S[Author] OR Solheim JM[Author] OR Grut H[Author]';

interface Publication {
  uid: string;
  title: string;
  authors: string;
  journal: string;
  pubdate: string;
  epubdate: string;
  link: string;
  doi?: string;
}

export default function Publications() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        // Step 1: Search for IDs
        // Using a more robust fetch approach with error handling
        const searchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encodeURIComponent(AUTHORS_QUERY)}&retmode=json&retmax=10&sort=date`;
        
        const searchRes = await fetch(searchUrl);
        if (!searchRes.ok) {
          throw new Error(`Search failed: ${searchRes.status} ${searchRes.statusText}`);
        }
        
        const searchData = await searchRes.json();
        const ids = searchData.esearchresult?.idlist || [];
        
        if (ids.length === 0) {
          setPublications([]);
          setLoading(false);
          return;
        }

        // Step 2: Fetch details for these IDs
        const summaryUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${ids.join(",")}&retmode=json`;
        const summaryRes = await fetch(summaryUrl);
        if (!summaryRes.ok) {
          throw new Error(`Summary failed: ${summaryRes.status} ${summaryRes.statusText}`);
        }
        
        const summaryData = await summaryRes.json();
        
        // The structure of esummary result can vary, sometimes it's under 'result' key directly
        const result = summaryData.result || {};
        
        const fetchedPubs: Publication[] = ids.map((uid: string) => {
          const item = result[uid];
          if (!item) return null;

          // Format authors safely
          const authorList = Array.isArray(item.authors) ? item.authors.map((a: any) => a.name) : [];
          let authorsStr = authorList.slice(0, 5).join(", ");
          if (authorList.length > 5) authorsStr += ", et al.";

          // Find DOI safely
          let doi = "";
          if (item.elocationid) {
             // elocationid can be a string or array depending on the record
             const eloc = item.elocationid;
             if (typeof eloc === 'string' && eloc.startsWith("doi: ")) {
               doi = eloc.replace("doi: ", "");
             }
          }
          
          if (!doi && item.articleids) {
             const doiObj = item.articleids.find((id: any) => id.idtype === "doi");
             if (doiObj) doi = doiObj.value;
          }

          return {
            uid,
            title: item.title || "Untitled Publication",
            authors: authorsStr || "Unknown Authors",
            journal: item.source || item.fulljournalname || "Unknown Journal",
            pubdate: (item.pubdate || "").split(" ")[0], 
            epubdate: item.epubdate || "",
            link: `https://pubmed.ncbi.nlm.nih.gov/${uid}/`,
            doi
          };
        }).filter((p: Publication | null): p is Publication => p !== null);

        setPublications(fetchedPubs);
      } catch (err) {
        console.error("PubMed API Error:", err);
        setError("Unable to load the latest publications. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1">
              Live Feed
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
              Latest <span className="text-primary">Research</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Real-time updates from PubMed featuring the latest work by our team members.
            </p>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {loading && (
              <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                <Loader2 className="w-12 h-12 animate-spin mb-4 text-primary" />
                <p>Fetching latest data from PubMed...</p>
              </div>
            )}

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {!loading && !error && publications.length === 0 && (
               <div className="text-center py-12 text-slate-500">
                 No recent publications found for the specified authors.
               </div>
            )}

            {!loading && !error && publications.map((pub) => (
              <Card key={pub.uid} className="hover:shadow-md transition-shadow border-slate-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-slate-500 border-slate-200">
                      PubMed
                    </Badge>
                    <div className="flex items-center text-sm text-slate-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      {pub.pubdate}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 leading-tight">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-start gap-2">
                      <span dangerouslySetInnerHTML={{ __html: pub.title }} />
                      <ExternalLink className="w-4 h-4 mt-1 shrink-0 opacity-50" />
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-slate-600 mb-2 font-medium text-sm">
                    {pub.authors}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 italic mt-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      {pub.journal}
                    </div>
                    {pub.doi && (
                      <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500 not-italic font-mono">
                        DOI: {pub.doi}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Looking for more?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Visit our profiles on academic networks for a complete history.
          </p>
          <div className="flex justify-center gap-4">
            <a href={`https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(AUTHORS_QUERY)}`} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-full px-8">
                View All on PubMed <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
