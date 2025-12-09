import { Link } from "wouter";
import { ArrowRight, FileText, Activity, Microscope, Clock, AlertCircle, CheckCircle2, BarChart3, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Research() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/research-abstract.jpg')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20 border-none px-3 py-1 backdrop-blur-md">
              Transplant Oncology
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Pushing the Boundaries of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Cancer Treatment</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Transplant oncology is a new field integrating surgical oncology, transplant medicine, and tumor biology. Our group focuses on establishing liver transplantation as a curative option for selected patients with non-resectable liver malignancies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          
          {/* Introduction to Transplant Oncology */}
          <div className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">The Evolution of Transplant Oncology</h2>
            <div className="prose prose-lg text-slate-600 max-w-none">
              <p>
                Historically, malignancy was considered a contraindication for liver transplantation (LT) due to high recurrence rates and organ scarcity. However, the landscape has shifted dramatically over the last two decades.
              </p>
              <p>
                The concept of <strong>Transplant Oncology</strong> rests on four pillars:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-8">
                <li className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex gap-3 items-start">
                  <div className="bg-primary/10 p-2 rounded-md text-primary mt-1"><Activity className="w-4 h-4" /></div>
                  <div>
                    <strong className="block text-slate-900">Multidisciplinary Care</strong>
                    <span className="text-sm">Integrating oncology, surgery, and hepatology.</span>
                  </div>
                </li>
                <li className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex gap-3 items-start">
                  <div className="bg-primary/10 p-2 rounded-md text-primary mt-1"><Microscope className="w-4 h-4" /></div>
                  <div>
                    <strong className="block text-slate-900">Genomic Insight</strong>
                    <span className="text-sm">Using molecular profiling to understand tumor biology.</span>
                  </div>
                </li>
                <li className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex gap-3 items-start">
                  <div className="bg-primary/10 p-2 rounded-md text-primary mt-1"><CheckCircle2 className="w-4 h-4" /></div>
                  <div>
                    <strong className="block text-slate-900">Extended Resectability</strong>
                    <span className="text-sm">Using LT to achieve R0 margins in "unresectable" disease.</span>
                  </div>
                </li>
                <li className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex gap-3 items-start">
                  <div className="bg-primary/10 p-2 rounded-md text-primary mt-1"><Activity className="w-4 h-4" /></div>
                  <div>
                    <strong className="block text-slate-900">Tumor Immunology</strong>
                    <span className="text-sm">Balancing immunosuppression with cancer control.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <Tabs defaultValue="crlm" className="w-full">
            <div className="flex justify-center mb-12 overflow-x-auto pb-4">
              <TabsList className="bg-white p-1 rounded-full shadow-sm border border-slate-200 h-auto inline-flex">
                <TabsTrigger value="crlm" className="rounded-full px-6 py-3 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-white transition-all">
                  Colorectal Liver Metastases (CRLM)
                </TabsTrigger>
                <TabsTrigger value="cca" className="rounded-full px-6 py-3 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-white transition-all">
                  Cholangiocarcinoma (CCA)
                </TabsTrigger>
              </TabsList>
            </div>

            {/* CRLM Section */}
            <TabsContent value="crlm" className="animate-in fade-in slide-in-from-bottom-5 duration-500 space-y-12">
              
              {/* SECA Trials Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div className="prose prose-slate max-w-none">
                    <h2 className="text-3xl font-heading font-bold text-slate-900">Liver Transplantation for CRLM</h2>
                    <p className="lead text-xl text-slate-600">
                      The SECA trials have pioneered the use of liver transplantation for non-resectable colorectal liver metastases, demonstrating that selected patients can achieve long-term survival far exceeding palliative chemotherapy.
                    </p>
                    
                    <div className="my-8">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">SECA-I & SECA-II Results</h3>
                      <p>
                        The <strong>SECA-I trial</strong> (2006-2013) was a proof-of-concept study showing a 5-year overall survival (OS) of 60%. However, disease-free survival was low, highlighting the need for better selection.
                      </p>
                      <p>
                        The <strong>SECA-II trial</strong> implemented stricter selection criteria (Oslo Score 0-1), resulting in a dramatic improvement:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose my-6">
                        <Card className="bg-blue-50 border-blue-100">
                          <CardContent className="p-6 text-center">
                            <div className="text-4xl font-bold text-primary mb-1">100%</div>
                            <div className="text-sm font-medium text-slate-600">1-Year Survival</div>
                          </CardContent>
                        </Card>
                        <Card className="bg-blue-50 border-blue-100">
                          <CardContent className="p-6 text-center">
                            <div className="text-4xl font-bold text-primary mb-1">83%</div>
                            <div className="text-sm font-medium text-slate-600">5-Year Survival</div>
                          </CardContent>
                        </Card>
                        <Card className="bg-blue-50 border-blue-100">
                          <CardContent className="p-6 text-center">
                            <div className="text-4xl font-bold text-primary mb-1">83%</div>
                            <div className="text-sm font-medium text-slate-600">10-Year Survival</div>
                          </CardContent>
                        </Card>
                      </div>
                      <p className="text-sm text-slate-500 italic">
                        *Results for patients with low Oslo Score (0-1) in SECA-II. Source: Dueland et al., JAMA Surgery 2023.
                      </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm my-8">
                      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-primary" />
                        Importance of Rigorous Selection
                      </h3>
                      <p className="mb-4">
                        Patient selection is the single most critical factor for success. Our research identified four key negative prognostic factors (The Oslo Score):
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400"/> Largest tumor diameter &gt; 5.5 cm</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400"/> CEA levels &gt; 80 μg/L</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400"/> Progressive disease on chemotherapy</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400"/> Time from primary surgery &lt; 2 years</li>
                      </ul>
                      <p className="mt-4 text-sm text-slate-600">
                        Patients with an Oslo Score of 0-1 have excellent outcomes, while those with high scores (3-4) have poor survival comparable to palliative chemotherapy.
                      </p>
                    </div>
                  </div>

                  {/* Active Protocols for CRLM */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900">Active Protocols</h3>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="seca-ext">
                        <AccordionTrigger className="text-lg font-semibold">SECA-II Extension</AccordionTrigger>
                        <AccordionContent className="prose prose-sm max-w-none p-4 bg-slate-50 rounded-lg">
                          <p>
                            <strong>Objective:</strong> To validate the long-term survival benefits observed in SECA-II and integrate ctDNA monitoring for early relapse detection.
                          </p>
                          <p>
                            <strong>Status:</strong> Active follow-up. 10-year results expected in 2026.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="rapid">
                        <AccordionTrigger className="text-lg font-semibold">LD-RAPID Protocol</AccordionTrigger>
                        <AccordionContent className="prose prose-sm max-w-none p-4 bg-slate-50 rounded-lg">
                          <p>
                            <strong>Concept:</strong> Addresses organ scarcity by using small left-lateral liver grafts (segments 2+3) from living donors.
                          </p>
                          <p>
                            <strong>Procedure:</strong> Two-stage hepatectomy. Stage 1: Implantation of auxiliary graft. Stage 2: Removal of native liver after graft regeneration (approx. 2 weeks).
                          </p>
                          <p>
                            <strong>Benefit:</strong> Expands donor pool while minimizing donor risk (double equipoise).
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="excalibur">
                        <AccordionTrigger className="text-lg font-semibold">EXCALIBUR Trial</AccordionTrigger>
                        <AccordionContent className="prose prose-sm max-w-none p-4 bg-slate-50 rounded-lg">
                          <p>
                            <strong>Design:</strong> Randomized Controlled Trial (RCT) comparing LT vs. Chemotherapy for patients with high tumor load.
                          </p>
                          <p>
                            <strong>Status:</strong> Currently paused for interim analysis.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card className="bg-slate-900 text-white border-none">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-primary" />
                        Key Statistic
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-2">5-Year OS: 83%</div>
                      <p className="text-slate-400 text-sm">
                        For highly selected CRLM patients (Oslo Score 0-1) in SECA-II.
                      </p>
                      <div className="h-px bg-slate-800 my-4" />
                      <div className="text-3xl font-bold mb-2">10%</div>
                      <p className="text-slate-400 text-sm">
                        Typical 5-year survival for similar patients on palliative chemotherapy.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Inclusion Criteria (General)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2">
                      <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Liver-only disease (unresectable)</div>
                      <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> ECOG 0-1</div>
                      <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Primary tumor resected</div>
                      <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Response to chemotherapy (&gt;10%)</div>
                      <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> PET-MTV &lt; 70 cm³</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* CCA Section */}
            <TabsContent value="cca" className="animate-in fade-in slide-in-from-bottom-5 duration-500 space-y-12">
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div className="prose prose-slate max-w-none">
                    <h2 className="text-3xl font-heading font-bold text-slate-900">Liver Transplantation for Cholangiocarcinoma</h2>
                    <p className="lead text-xl text-slate-600">
                      Cholangiocarcinoma (CCA) is a heterogeneous group of biliary tract malignancies. While historically contraindicated, LT is now an established treatment for perihilar CCA (pCCA) under strict protocols and an emerging option for intrahepatic CCA (iCCA) in highly selected patients.
                    </p>

                    <div className="my-8">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Perihilar CCA (pCCA)</h3>
                      <p>
                        For unresectable pCCA, the <strong>Mayo Clinic Protocol</strong> has set the standard. It involves:
                      </p>
                      <ol>
                        <li><strong>Neoadjuvant Therapy:</strong> Chemoradiation to sterilize microscopic disease.</li>
                        <li><strong>Staging:</strong> Exploratory laparotomy to rule out lymph node metastases.</li>
                        <li><strong>Transplantation:</strong> For those who remain disease-free.</li>
                      </ol>
                      <p>
                        This approach yields 5-year survival rates of <strong>60-70%</strong>, comparable to HCC transplantation.
                      </p>
                    </div>

                    <div className="my-8">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Intrahepatic CCA (iCCA)</h3>
                      <p>
                        iCCA has been more challenging due to biological heterogeneity. However, two phenotypes are now considered for LT:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Very Early iCCA:</strong> Single tumor ≤ 2cm in cirrhotic liver (often an incidental finding).</li>
                        <li><strong>Locally Advanced iCCA:</strong> Liver-confined disease with sustained response to chemotherapy.</li>
                      </ul>
                      
                    {/* TESLA Trial */}\n                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm mb-8 mt-8">\n                      <div className="bg-slate-900 text-white p-8">\n                        <div className="flex items-center gap-3 mb-4">\n                          <Badge className="bg-primary text-white border-none">Recruiting</Badge>\n                          <span className="text-slate-400 font-mono text-sm">NCT04556214</span>\n                        </div>\n                        <h3 className="text-2xl font-bold mb-2">TESLA Trial</h3>\n                        <p className="text-slate-300">\n                          Liver Transplantation for Non-Resectable Intrahepatic Cholangiocarcinoma\n                        </p>\n                      </div>\n                      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">\n                        <div>\n                          <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">\n                            <Clock className="w-4 h-4 text-primary" />\n                            The "Test of Time"\n                          </h4>\n                          <p className="text-sm text-slate-600 mb-4">\n                            A critical selection tool. Patients must demonstrate stable disease on chemotherapy for at least 6 months prior to listing. This selects for favorable tumor biology and excludes rapid progressors.\n                          </p>\n                          <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">\n                            <Activity className="w-4 h-4 text-primary" />\n                            Study Design\n                          </h4>\n                          <p className="text-sm text-slate-600">\n                            Prospective exploratory trial. Primary endpoint: Overall Survival.\n                          </p>\n                        </div>\n                        <div>\n                          <h4 className="font-bold text-slate-900 mb-3">Key Inclusion Criteria</h4>\n                          <ul className="space-y-2 text-sm text-slate-600">\n                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Single lesion ≤ 10 cm OR multiple (max 5) ≤ 12 cm</li>\n                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Confirmed non-resectable iCCA</li>\n                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> No extrahepatic disease (PET-CT negative)</li>\n                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Stable disease on chemo &gt; 6 months</li>\n                          </ul>\n                        </div>\n                      </div>\n                    </div>\n\n                    {/* TESLA II Trial */}\n                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm mb-8">\n                      <div className="bg-slate-50 p-8 border-b border-slate-100">\n                        <div className="flex items-center gap-3 mb-4">\n                          <Badge variant="outline" className="text-slate-600 border-slate-300">New Protocol</Badge>\n                          <span className="text-slate-400 font-mono text-sm">Exploratory</span>\n                        </div>\n                        <h3 className="text-2xl font-bold mb-2 text-slate-900">TESLA-II Trial</h3>\n                        <p className="text-slate-600">\n                          Liver Transplantation for Non-Resectable Perihilar Cholangiocarcinoma (pCCA)\n                        </p>\n                      </div>\n                      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">\n                        <div>\n                          <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">\n                            <Microscope className="w-4 h-4 text-primary" />\n                            Objective\n                          </h4>\n                          <p className="text-sm text-slate-600 mb-4">\n                            To explore whether liver transplantation in selected non-resectable patients with pCCA can achieve long-term survival (&gt;50% at 5 years) and good quality of life.\n                          </p>\n                          <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">\n                            <AlertCircle className="w-4 h-4 text-primary" />\n                            Rationale\n                          </h4>\n                          <p className="text-sm text-slate-600">\n                            Building on the Mayo Clinic protocol and our experience with CRLM, this trial targets patients who have shown sustained response to chemotherapy (minimum 6 months) but are not eligible for resection.\n                          </p>\n                        </div>\n                        <div>\n                          <h4 className="font-bold text-slate-900 mb-3">Key Inclusion Criteria</h4>\n                          <ul className="space-y-2 text-sm text-slate-600">\n                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Non-resectable pCCA without extrahepatic disease</li>\n                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> At least 10 months from diagnosis to listing</li>\n                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Minimum 6 months of chemotherapy with response/stable disease</li>\n                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> No lymph node involvement detected on imaging</li>\n                          </ul>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div className="my-8">\n                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Background & Rationale</h3>
                      <p>
                        Cholangiocarcinoma accounts for 3% of all GI malignancies. Surgical resection is the only curative treatment, but resectability rates are low (&lt;40% for pCCA) and recurrence is high.
                      </p>
                      <p>
                        <strong>Why LT?</strong> Liver transplantation offers an oncologic "field-change" operation that removes the tumor-bearing liver and underlying diseased parenchyma, addressing occult biliary extension and microscopic intrahepatic disease.
                      </p>
                      <p>
                        <strong>The "Test of Time":</strong> For iCCA, unlike pCCA, neoadjuvant chemoradiotherapy is not standardized. Instead, we use a "test-of-time" strategy: patients must show disease stability on systemic chemotherapy for ≥6-12 months. This selects for favorable tumor biology and excludes aggressive disease destined for early recurrence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card className="bg-slate-900 text-white border-none">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        The "Test of Time"
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 text-sm mb-4">
                        Unlike HCC (Milan criteria), iCCA selection relies on biological behavior over time.
                      </p>
                      <div className="bg-white/10 p-3 rounded-lg">
                        <div className="text-2xl font-bold mb-1">6-12 Months</div>
                        <div className="text-xs text-slate-400">
                          Minimum duration of stability on chemotherapy required before listing.
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Contraindications</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2">
                      <div className="flex gap-2"><AlertCircle className="w-4 h-4 text-red-500 shrink-0" /> Extrahepatic disease</div>
                      <div className="flex gap-2"><AlertCircle className="w-4 h-4 text-red-500 shrink-0" /> Lymph node metastases</div>
                      <div className="flex gap-2"><AlertCircle className="w-4 h-4 text-red-500 shrink-0" /> Vascular invasion (Main PV)</div>
                      <div className="flex gap-2"><AlertCircle className="w-4 h-4 text-red-500 shrink-0" /> Prior peritoneal biopsy</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-blue-50 border-blue-100">
                    <CardHeader>
                      <CardTitle className="text-primary flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Key Reference
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-slate-600">
                      <p className="italic mb-2">"Current Status of Liver Transplantation in Cholangiocarcinoma"</p>
                      <p>Yaqub S, Smedman TM, Dueland S, et al. (2025)</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
