import { Link } from "wouter";
import { ArrowRight, FileText, ExternalLink, BookOpen, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Publication data structure
const publications = [
  {
    year: 2025,
    title: "Liver transplantation for locally advanced non-resectable intrahepatic cholangiocarcinoma treated with neoadjuvant therapy: early results from the TESLA trial",
    authors: "Yaqub S, Syversveen T, Line PD, Dueland S, et al.",
    journal: "British Journal of Surgery",
    link: "https://academic.oup.com/bjs/article-abstract/112/3/znaf054/8083032",
    category: "Cholangiocarcinoma"
  },
  {
    year: 2025,
    title: "Liver transplantation for colorectal metastases following hepatic resection",
    authors: "Yaqub S, Syversveen T, Line PD, Dueland S",
    journal: "British Journal of Surgery",
    link: "https://academic.oup.com/bjs/article-abstract/112/9/znaf193/8258806",
    category: "CRLM"
  },
  {
    year: 2024,
    title: "A Novel Transplant Approach for Locally Advanced Unresectable Perihilar Cholangiocarcinoma: The SURE-LT Concept",
    authors: "Line PD, Yaqub S, et al.",
    journal: "Annals of Surgery",
    link: "https://journals.lww.com/annalsofsurgery/citation/9900/a_novel_transplant_approach_for_locally_advanced.1419.aspx",
    category: "Cholangiocarcinoma"
  },
  {
    year: 2024,
    title: "Metabolic Tumor Volume from 18F-FDG PET/CT in Combination with Radiologic Measurements to Predict Long-Term Survival Following Transplantation for Colorectal Liver Metastases",
    authors: "Grut H, Revheim ME, Line PD, Dueland S",
    journal: "Cancers",
    link: "https://www.mdpi.com/2072-6694/16/1/19",
    category: "Radiology / Prognosis"
  },
  {
    year: 2023,
    title: "Long-Term Survival, Prognostic Factors, and Selection of Patients With Colorectal Cancer for Liver Transplant: A Nonrandomized Controlled Trial",
    authors: "Dueland S, Guren TK, Hagness M, Syversveen T, Grut H, Line PD",
    journal: "JAMA Surgery",
    link: "https://jamanetwork.com/journals/jamasurgery/fullarticle/2807723",
    category: "CRLM"
  },
  {
    year: 2023,
    title: "Transplantation for Nonresectable Colorectal Liver Metastases: Long-Term Follow-Up of the First Prospective Pilot Study",
    authors: "Solheim JM, Dueland S, Line PD, Hagness M",
    journal: "Annals of Surgery",
    link: "https://pubmed.ncbi.nlm.nih.gov/36645086/",
    category: "CRLM"
  },
  {
    year: 2022,
    title: "Survival after liver resection and liver transplantation for colorectal liver metastases: a comparative analysis stratified by metabolic tumor volume",
    authors: "Grut H, Line PD, Labori KJ, Schulz A, Dueland S",
    journal: "HPB",
    link: "https://pubmed.ncbi.nlm.nih.gov/34924292/",
    category: "Radiology / Prognosis"
  },
  {
    year: 2022,
    title: "Health-related quality of life in colorectal cancer patients treated with liver transplantation compared to chemotherapy",
    authors: "Smedman TM, Guren TK, Tveit KM, Line PD, Dueland S",
    journal: "Transplant International",
    link: "https://www.frontierspartnerships.org/journals/transplant-international/articles/10.3389/ti.2022.10404/full",
    category: "Quality of Life"
  },
  {
    year: 2021,
    title: "Survival Outcomes After Portal Vein Embolization and Liver Resection Compared With Liver Transplant for Patients With Extensive Colorectal Cancer Liver Metastases",
    authors: "Dueland S, Grut H, Syversveen T, Line PD",
    journal: "JAMA Surgery",
    link: "https://jamanetwork.com/journals/jamasurgery/fullarticle/2775632",
    category: "CRLM"
  },
  {
    year: 2020,
    title: "Liver transplantation for unresectable colorectal liver metastases in patients and donors with extended criteria (SECA-II arm D study)",
    authors: "Smedman TM, Line PD, Hagness M, Syversveen T, Grut H, Dueland S",
    journal: "BJS Open",
    link: "https://academic.oup.com/bjsopen/article/4/3/467/6061460",
    category: "CRLM"
  },
  {
    year: 2019,
    title: "Liver transplantation as a lifesaving procedure for posthepatectomy liver failure and iatrogenic liver injuries",
    authors: "Thorsen T, Solheim JM, Labori KJ, Line PD, Aandahl EM",
    journal: "Langenbeck's Archives of Surgery",
    link: "https://pubmed.ncbi.nlm.nih.gov/30929063/",
    category: "Liver Failure"
  },
  {
    year: 2019,
    title: "Transplant oncology: assessment of response and tolerance to systemic chemotherapy for metastatic colorectal cancer after liver transplantation–a retrospective study",
    authors: "Smedman TM, Line PD, Dueland S",
    journal: "Transplant International",
    link: "https://onlinelibrary.wiley.com/doi/abs/10.1111/tri.13471",
    category: "Chemotherapy"
  },
  {
    year: 2018,
    title: "The prognostic value of 18F–FDG PET/CT prior to liver transplantation for nonresectable colorectal liver metastases",
    authors: "Grut H, Dueland S, Line PD, Revheim ME",
    journal: "European Journal of Nuclear Medicine and Molecular Imaging",
    link: "https://link.springer.com/article/10.1007/s00259-017-3843-9",
    category: "Radiology / Prognosis"
  },
  {
    year: 2016,
    title: "Liver transplantation for nonresectable liver metastases from colorectal cancer",
    authors: "Hagness M, Foss A, Line PD, Scholz T, Jørgensen PF, Fosby B, Dueland S",
    journal: "Annals of Surgery",
    link: "https://pubmed.ncbi.nlm.nih.gov/23673776/",
    category: "CRLM"
  },
  {
    year: 2015,
    title: "Liver transplantation for colorectal liver metastases: The SECA study",
    authors: "Dueland S, Hagness M, Line PD, Guren TK, Tveit KM, Foss A",
    journal: "Annals of Surgery",
    link: "https://pubmed.ncbi.nlm.nih.gov/25607768/",
    category: "CRLM"
  }
];

export default function Publications() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1">
              Research Output
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
              Key <span className="text-primary">Publications</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              A curated list of pivotal research papers authored by our team members, shaping the field of transplant oncology.
            </p>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow border-slate-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-slate-500 border-slate-200">
                      {pub.category}
                    </Badge>
                    <div className="flex items-center text-sm text-slate-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      {pub.year}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 leading-tight">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-start gap-2">
                      {pub.title}
                      <ExternalLink className="w-4 h-4 mt-1 shrink-0 opacity-50" />
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-slate-600 mb-2 font-medium">
                    {pub.authors}
                  </div>
                  <div className="text-sm text-slate-500 italic flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {pub.journal}
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
            Visit our profiles on academic networks for a complete list of publications.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Line+PD+OR+Dueland+S+OR+Smedman+TM+OR+Yaqub+S" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-full px-8">
                View on PubMed <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
