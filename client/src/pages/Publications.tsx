import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ExternalLink, Calendar, User } from "lucide-react";

const publications = [
  {
    title: "Long-Term Survival, Prognostic Factors, and Selection of Patients With Colorectal Cancer for Liver Transplant: A Nonrandomized Controlled Trial",
    authors: "Dueland S, Smedman TM, Syversveen T, Grut H, Hagness M, Line PD",
    journal: "JAMA Surgery",
    year: "2023",
    doi: "10.1001/jamasurg.2023.2932",
    abstract: "This nonrandomized controlled trial demonstrated superior survival outcomes for liver transplantation compared to standard of care for patients with colorectal liver metastases. The study highlights the importance of patient selection using the Oslo Score.",
    link: "https://jamanetwork.com/journals/jamasurgery/fullarticle/2804664",
    category: "Colorectal Liver Metastases"
  },
  {
    title: "Liver transplantation for locally advanced non-resectable intrahepatic cholangiocarcinoma treated with neoadjuvant therapy - early results from the TESLA trial",
    authors: "Yaqub S, et al.",
    journal: "British Journal of Surgery",
    year: "2025",
    doi: "",
    abstract: "Early results from the TESLA trial showing promising outcomes for selected patients with intrahepatic cholangiocarcinoma treated with neoadjuvant therapy followed by liver transplantation.",
    link: "#",
    category: "Cholangiocarcinoma"
  },
  {
    title: "Assessing the attitudes of next of kin toward living donor liver transplantation for patients with colorectal liver metastases",
    authors: "Smedman TM, et al.",
    journal: "Scandinavian Journal of Surgery",
    year: "2025",
    doi: "",
    abstract: "An investigation into the ethical and psychosocial aspects of living donor liver transplantation, focusing on the perspectives of next of kin.",
    link: "#",
    category: "Living Donor / Ethics"
  },
  {
    title: "Survival Outcomes After Portal Vein Embolization and Liver Resection Compared With Liver Transplant for Patients With Extensive Colorectal Cancer Liver Metastases",
    authors: "Dueland S, et al.",
    journal: "JAMA Surgery",
    year: "2021",
    doi: "10.1001/jamasurg.2020.6963",
    abstract: "Comparative analysis showing that liver transplantation may offer better survival outcomes than extensive resection in patients with high tumor load.",
    link: "https://jamanetwork.com/journals/jamasurgery/fullarticle/2775632",
    category: "Colorectal Liver Metastases"
  },
  {
    title: "Liver transplantation for unresectable colorectal liver metastases in patients and donors with extended criteria (SECA‐II arm D study)",
    authors: "Smedman TM, et al.",
    journal: "BJS Open",
    year: "2020",
    doi: "10.1002/bjs5.50278",
    abstract: "Results from the SECA-II arm D study, exploring the use of extended criteria donors for patients with unresectable CRLM.",
    link: "https://academic.oup.com/bjsopen/article/4/3/467/5935648",
    category: "Colorectal Liver Metastases"
  },
  {
    title: "Molecular prognostic factors for liver transplantation of unresectable metastatic colorectal cancer",
    authors: "Moosavi, et al.",
    journal: "British Journal of Surgery",
    year: "2025",
    doi: "",
    abstract: "Analysis of molecular markers and their prognostic value in selecting candidates for liver transplantation.",
    link: "#",
    category: "Biomarkers / Basic Science"
  },
  {
    title: "Liver transplantation versus liver resection for colorectal liver metastasis - a survival benefit analysis in patients stratified according to tumor burden score",
    authors: "Lanari, et al.",
    journal: "Transplant International",
    year: "2021",
    doi: "",
    abstract: "Survival benefit analysis stratifying patients by tumor burden score to determine the optimal treatment strategy.",
    link: "#",
    category: "Colorectal Liver Metastases"
  }
];

export default function Publications() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container text-center max-w-3xl mx-auto">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1">
            Scientific Output
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
            Research <span className="text-primary">Publications</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Our findings are published in high-impact peer-reviewed journals, contributing to the global evidence base for transplant oncology.
          </p>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <Card key={index} className="overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        <FileText className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200">
                          {pub.category}
                        </Badge>
                        <span className="text-sm text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {pub.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                        {pub.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-4 font-medium">
                        <User className="w-4 h-4" />
                        {pub.authors}
                        <span className="text-slate-300 mx-2">|</span>
                        <span className="italic text-slate-700">{pub.journal}</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {pub.abstract}
                      </p>
                      <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm" className="gap-2" asChild>
                          <a href={pub.link} target="_blank" rel="noreferrer">
                            View Publication <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                        {pub.doi && (
                          <span className="text-xs text-slate-400 font-mono">
                            DOI: {pub.doi}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
