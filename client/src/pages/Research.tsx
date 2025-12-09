import { Link } from "wouter";
import { ArrowRight, FileText, Activity, Microscope, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Research() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/research-abstract.jpg')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20 border-none px-3 py-1 backdrop-blur-md">
              Clinical Trials & Protocols
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Pushing the Boundaries of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Transplant Medicine</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Detailed overview of our ongoing prospective studies, including patient selection criteria, methodologies, and expected outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <Tabs defaultValue="seca" className="w-full">
            <div className="flex justify-center mb-12 overflow-x-auto pb-4">
              <TabsList className="bg-white p-1 rounded-full shadow-sm border border-slate-200 h-auto inline-flex">
                <TabsTrigger value="seca" className="rounded-full px-6 py-3 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-white transition-all">
                  SECA-II Extension
                </TabsTrigger>
                <TabsTrigger value="rapid" className="rounded-full px-6 py-3 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-white transition-all">
                  LD-RAPID
                </TabsTrigger>
                <TabsTrigger value="tesla" className="rounded-full px-6 py-3 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-white transition-all">
                  TESLA Trial
                </TabsTrigger>
                <TabsTrigger value="excalibur" className="rounded-full px-6 py-3 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-white transition-all">
                  EXCALIBUR
                </TabsTrigger>
              </TabsList>
            </div>

            {/* SECA-II Content */}
            <TabsContent value="seca" className="animate-in fade-in slide-in-from-bottom-5 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle className="text-2xl font-heading text-primary">SECA-II Extension</CardTitle>
                      <CardDescription>Prospective study with extended follow-up and biomarker integration</CardDescription>
                    </CardHeader>
                    <CardContent className="prose prose-slate max-w-none">
                      <p>
                        Building on the success of the original SECA-II trial, this extension aims to secure continued funding and scientific exploitation of the cohort. A key deliverable will be the publication of an updated <strong>10-year survival analysis</strong> and cure analysis.
                      </p>
                      <h3>Primary Aims</h3>
                      <ul>
                        <li>Document long-term survival (10-year OS and cure) after LT for CRLM.</li>
                        <li>If successful, these data will underpin guideline revisions to include LT as a standard of care.</li>
                      </ul>
                      <h3>Patient Selection Criteria</h3>
                      <ul className="bg-slate-50 p-6 rounded-xl border border-slate-100 not-prose space-y-2 text-sm text-slate-700">
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"/> No extra-hepatic metastases</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"/> At least 10% response to chemotherapy</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"/> Size of largest lesion &lt; 5.5 cm</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"/> PET-MTV &lt; 70 cm³</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"/> Minimum 12 months from diagnosis to inclusion</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle className="text-xl font-heading">Innovation: ctDNA Integration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-4">
                        A key innovation is the systematic integration of circulating tumor DNA (ctDNA) monitoring. This establishes a new paradigm for biomarker-driven transplant oncology.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                          <Activity className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <div className="font-bold text-slate-900 text-sm">Early Detection</div>
                          <div className="text-xs text-slate-500">Of minimal residual disease</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                          <Microscope className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <div className="font-bold text-slate-900 text-sm">Risk Stratification</div>
                          <div className="text-xs text-slate-500">Dynamic assessment</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                          <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <div className="font-bold text-slate-900 text-sm">Surveillance</div>
                          <div className="text-xs text-slate-500">Post-transplant monitoring</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-4">Key Personnel</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                          <img src="/svein_dueland.webp" alt="Svein Dueland" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">Svein Dueland</div>
                          <div className="text-xs text-slate-500">Primary Investigator</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                          <img src="/tor_magnus_smedman.webp" alt="Tor Magnus Smedman" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">Tor Magnus Smedman</div>
                          <div className="text-xs text-slate-500">Project Manager</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <h3 className="font-bold text-primary mb-2">Status</h3>
                    <Badge className="bg-green-500 hover:bg-green-600 mb-4">Active Follow-up</Badge>
                    <p className="text-sm text-slate-600">
                      Currently collecting long-term data. Expected publication of 10-year results in 2026.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* LD-RAPID Content */}
            <TabsContent value="rapid" className="animate-in fade-in slide-in-from-bottom-5 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle className="text-2xl font-heading text-primary">LD-RAPID Protocol</CardTitle>
                      <CardDescription>Two-stage living donor transplantation strategy</CardDescription>
                    </CardHeader>
                    <CardContent className="prose prose-slate max-w-none">
                      <p>
                        The LD-RAPID protocol represents a novel approach that directly addresses organ scarcity. By utilizing small segmental liver grafts (segments 2+3), we expand the donor pool while minimizing donor risk.
                      </p>
                      <h3>The Procedure</h3>
                      <ol>
                        <li><strong>Stage 1:</strong> Partial hepatectomy with segment 2-3 graft transplantation. Portal flow is redirected to the graft to induce fast regeneration.</li>
                        <li><strong>Stage 2:</strong> Delayed total hepatectomy, performed 2-3 weeks after graft regeneration.</li>
                      </ol>
                      <h3>Donor Safety</h3>
                      <p>
                        Segments 2 and 3 (left lateral sector) represent a safe and feasible portion of the liver that can be donated without significant risk to the donor, adhering to the principle of double equipoise.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-4">Key Personnel</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                          <img src="/tor_magnus_smedman.webp" alt="Tor Magnus Smedman" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">Tor Magnus Smedman</div>
                          <div className="text-xs text-slate-500">Lead Investigator</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <h3 className="font-bold text-primary mb-2">Status</h3>
                    <Badge className="bg-blue-500 hover:bg-blue-600 mb-4">Recruiting</Badge>
                    <p className="text-sm text-slate-600">
                      Implementation and first patient transplanted expected in 2026.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* TESLA Content */}
            <TabsContent value="tesla" className="animate-in fade-in slide-in-from-bottom-5 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle className="text-2xl font-heading text-primary">TESLA Trial</CardTitle>
                      <CardDescription>Liver transplantation for intrahepatic cholangiocarcinoma</CardDescription>
                    </CardHeader>
                    <CardContent className="prose prose-slate max-w-none">
                      <p>
                        The TESLA trial investigates liver transplantation for locally advanced non-resectable intrahepatic cholangiocarcinoma (ICC) treated with neoadjuvant therapy.
                      </p>
                      <p>
                        Historically, ICC was considered a contraindication for transplantation due to high recurrence rates. However, recent data suggests that highly selected patients who respond to neoadjuvant therapy may achieve excellent long-term survival.
                      </p>
                      <h3>Early Results</h3>
                      <p>
                        Early results published in the <em>British Journal of Surgery</em> (2025) indicate promising outcomes, with acceptable recurrence rates in carefully selected candidates.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-4">Key Personnel</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                          <img src="/sheraz_yaqub.webp" alt="Sheraz Yaqub" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">Sheraz Yaqub</div>
                          <div className="text-xs text-slate-500">Lead Investigator</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <h3 className="font-bold text-primary mb-2">Status</h3>
                    <Badge className="bg-green-500 hover:bg-green-600 mb-4">Ongoing</Badge>
                    <p className="text-sm text-slate-600">
                      Active recruitment and follow-up.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* EXCALIBUR Content */}
            <TabsContent value="excalibur" className="animate-in fade-in slide-in-from-bottom-5 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle className="text-2xl font-heading text-primary">EXCALIBUR Trial</CardTitle>
                      <CardDescription>Randomized Controlled Trial for CRLM</CardDescription>
                    </CardHeader>
                    <CardContent className="prose prose-slate max-w-none">
                      <p>
                        The EXCALIBUR project is studying new treatment modalities and strategies for patients with colorectal liver metastases and heavy tumor burden.
                      </p>
                      <p>
                        This randomized controlled trial aims to provide level 1 evidence comparing liver transplantation to standard of care (chemotherapy) for patients with high tumor load who are not eligible for resection.
                      </p>
                      <h3>Study Arms</h3>
                      <ul>
                        <li><strong>Arm A:</strong> Liver Transplantation</li>
                        <li><strong>Arm B:</strong> Standard of Care (Chemotherapy)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-4">Key Personnel</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                          <img src="/pal_dag_line.webp" alt="Pål-Dag Line" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">Pål-Dag Line</div>
                          <div className="text-xs text-slate-500">Group Lead</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <h3 className="font-bold text-primary mb-2">Status</h3>
                    <Badge className="bg-yellow-500 hover:bg-yellow-600 mb-4">Paused</Badge>
                    <p className="text-sm text-slate-600">
                      Currently paused for interim analysis.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
