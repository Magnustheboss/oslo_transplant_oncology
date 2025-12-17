import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, AlertCircle, BarChart3, Microscope, Clock, Activity, BookOpen } from "lucide-react";

export default function Research() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1">
              Our Science
            </Badge>
            <h1 className="text-3xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
              Research & <span className="text-primary">Trials</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We are pioneering the field of Transplant Oncology through rigorous clinical trials and translational research.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <Tabs defaultValue="crlm" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="crlm">Colorectal Liver Mets</TabsTrigger>
                <TabsTrigger value="cca">Cholangiocarcinoma</TabsTrigger>
              </TabsList>
            </div>

            {/* CRLM Section */}
            <TabsContent value="crlm" className="animate-in fade-in slide-in-from-bottom-5 duration-500 space-y-12">
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div className="prose prose-slate max-w-none">
                    <h2 className="text-3xl font-heading font-bold text-slate-900">Liver Transplantation for CRLM</h2>
                    <p className="lead text-xl text-slate-600">
                      Colorectal cancer is the third most common cancer worldwide. For patients with liver-only metastases (CRLM) that are not resectable, palliative chemotherapy has been the only option—until now.
                    </p>
                    
                    <div className="my-8">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">The SECA Legacy</h3>
                      <p>
                        Our group initiated the world's first prospective study (SECA-I) in 2006. This proof-of-concept trial demonstrated a 5-year overall survival of 60%, far exceeding the 10% expected with chemotherapy alone.
                      </p>
                      <p>
                        <strong>SECA-II (2012-2020)</strong> refined the selection criteria. By selecting patients with favorable biology (low Oslo Score), we achieved a <strong>5-year survival of 83%</strong>.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
                      <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        The 4 Negative Prognostic Factors (Oslo Score)
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-500 shrink-0">1</div>
                          <span>Max tumor diameter &gt; 5.5 cm</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-500 shrink-0">2</div>
                          <span>CEA levels &gt; 80 µg/L</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-500 shrink-0">3</div>
                          <span>Progressive disease on chemotherapy</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-500 shrink-0">4</div>
                          <span>Time from primary surgery to transplant &lt; 2 years</span>
                        </li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Ongoing Trials</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="rapid">
                        <AccordionTrigger className="text-lg font-semibold">LD-RAPID Protocol</AccordionTrigger>
                        <AccordionContent className="prose prose-sm max-w-none p-4 bg-slate-50 rounded-lg">
                          <p>
                            <strong>Concept:</strong> Living Donor Liver Transplantation using a small left lateral segment (segments 2+3).
                          </p>
                          <p>
                            <strong>Technique:</strong> Two-stage hepatectomy. The small graft is implanted while the patient's own right liver lobe supports function. As the graft regenerates, the diseased liver is removed.
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
                    </div>
                      
                    {/* TESLA Trial */}
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm mb-8 mt-8">
                      <div className="bg-slate-900 text-white p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge className="bg-primary text-white border-none">Recruiting</Badge>
                          <span className="text-slate-400 font-mono text-sm">NCT04556214</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2" id="tesla">TESLA Trial</h3>
                        <p className="text-slate-300">
                          Liver Transplantation for Non-Resectable Intrahepatic Cholangiocarcinoma
                        </p>
                      </div>
                      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            The "Test of Time"
                          </h4>
                          <p className="text-sm text-slate-600 mb-4">
                            A critical selection tool. Patients must demonstrate stable disease on chemotherapy for at least 6 months prior to listing. This selects for favorable tumor biology and excludes rapid progressors.
                          </p>
                          <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Activity className="w-4 h-4 text-primary" />
                            Study Design
                          </h4>
                          <p className="text-sm text-slate-600">
                            Prospective exploratory trial. Primary endpoint: Overall Survival.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-3">Key Inclusion Criteria</h4>
                          <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Single lesion ≤ 10 cm OR multiple (max 5) ≤ 12 cm</li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Confirmed non-resectable iCCA</li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> No extrahepatic disease (PET-CT negative)</li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Stable disease on chemo &gt; 6 months</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* SURE-LT Trial */}
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm mb-8">
                      <div className="bg-emerald-900 text-white p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge className="bg-emerald-500 text-white border-none">Recruiting</Badge>
                          <span className="text-emerald-200 font-mono text-sm">NCT06850753</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2" id="sure-lt">SURE-LT</h3>
                        <p className="text-emerald-100">
                          SUperior Right Exenteration and Liver Transplantation for Locally Advanced Perihilar Cholangiocarcinoma
                        </p>
                      </div>
                      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Microscope className="w-4 h-4 text-emerald-600" />
                            Novel Surgical Approach
                          </h4>
                          <p className="text-sm text-slate-600 mb-4">
                            A radical "en bloc" resection of the spleen, pancreas, duodenum, and liver, followed by liver transplantation. This approach aims to achieve R0 resection in locally advanced cases where standard resection is not possible.
                          </p>
                          <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Activity className="w-4 h-4 text-emerald-600" />
                            Study Design
                          </h4>
                          <p className="text-sm text-slate-600">
                            Single-arm prospective clinical trial. Primary endpoint: Feasibility, safety, and recurrence-free survival.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-3">Key Inclusion Criteria</h4>
                          <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" /> Perihilar CCA not eligible for resection or standard LT</li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" /> No distant metastasis or M1 lymph node involvement</li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" /> Response/stable disease after 6 months of chemoradiotherapy</li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" /> De-novo pCCA in PSC patients may be considered</li>
                          </ul>
                          <div className="mt-6 pt-6 border-t border-slate-100">
                            <a 
                              href="https://clinicaltrials.gov/study/NCT06850753" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800 hover:underline text-sm"
                            >
                              View on ClinicalTrials.gov <BookOpen className="ml-2 w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* TESLA II Trial */}
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm mb-8">
                      <div className="bg-slate-50 p-8 border-b border-slate-100">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="outline" className="text-slate-600 border-slate-300">New Protocol</Badge>
                          <span className="text-slate-400 font-mono text-sm">Exploratory</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-slate-900">TESLA-II Trial</h3>
                        <p className="text-slate-600">
                          Liver Transplantation for Non-Resectable Perihilar Cholangiocarcinoma (pCCA)
                        </p>
                      </div>
                      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Microscope className="w-4 h-4 text-primary" />
                            Objective
                          </h4>
                          <p className="text-sm text-slate-600 mb-4">
                            To explore whether liver transplantation in selected non-resectable patients with pCCA can achieve long-term survival (&gt;50% at 5 years) and good quality of life.
                          </p>
                          <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-primary" />
                            Rationale
                          </h4>
                          <p className="text-sm text-slate-600">
                            Building on the Mayo Clinic protocol and our experience with CRLM, this trial targets patients who have shown sustained response to chemotherapy (minimum 6 months) but are not eligible for resection.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-3">Key Inclusion Criteria</h4>
                          <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Non-resectable pCCA without extrahepatic disease</li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> At least 10 months from diagnosis to listing</li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Minimum 6 months of chemotherapy with response/stable disease</li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> No lymph node involvement detected on imaging</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="my-8">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Background & Rationale</h3>
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
