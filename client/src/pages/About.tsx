import { Link } from "wouter";
import { ArrowRight, Award, History, Target, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
              Pioneering a New Era in <span className="text-primary">Oncology</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              The Oslo Transplant Oncology Group is dedicated to exploring and establishing liver transplantation as a curative treatment for patients with primary and secondary liver malignancies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-3 lg:sticky lg:top-32 h-fit">
              <nav className="space-y-1 border-l-2 border-slate-100 pl-4">
                <a href="#mission" className="block py-2 text-primary font-medium border-l-2 border-primary -ml-[18px] pl-4 transition-colors">Our Mission</a>
                <a href="#history" className="block py-2 text-slate-500 hover:text-slate-900 transition-colors">History & Innovation</a>
                <a href="#focus" className="block py-2 text-slate-500 hover:text-slate-900 transition-colors">Focus Areas</a>
                <a href="#impact" className="block py-2 text-slate-500 hover:text-slate-900 transition-colors">Global Impact</a>
              </nav>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-9 space-y-20">
              
              {/* Mission */}
              <div id="mission" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Target className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-slate-900">Our Mission</h2>
                </div>
                <div className="prose prose-lg text-slate-600 max-w-none">
                  <p>
                    For patients with non-resectable colorectal liver metastases (CRLM), the diagnosis has historically meant a poor prognosis, with five-year overall survival rates rarely exceeding 10% under standard chemotherapy regimens.
                  </p>
                  <p>
                    Our mission is to challenge this reality. By combining rigorous patient selection, advanced surgical techniques, and innovative biomarker monitoring, we aim to:
                  </p>
                  <ul className="list-none pl-0 space-y-4 my-8">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-1">✓</div>
                      <span><strong>Redefine Standards:</strong> Establish liver transplantation as a standard of care for selected patients with CRLM.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-1">✓</div>
                      <span><strong>Expand Access:</strong> Address organ scarcity through innovative protocols like LD-RAPID.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-1">✓</div>
                      <span><strong>Personalize Care:</strong> Utilize ctDNA and molecular markers to tailor treatment to each patient's biology.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* History */}
              <div id="history" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <History className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-slate-900">History & Innovation</h2>
                </div>
                <div className="prose prose-lg text-slate-600 max-w-none">
                  <p>
                    The Research Group for Transplant Oncology at Oslo University Hospital has pioneered the concept of liver transplantation for non-resectable CRLM, a condition previously considered an absolute contraindication to transplantation worldwide.
                  </p>
                  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 my-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 mt-0">The SECA Legacy</h3>
                    <p className="mb-0">
                      Our groundbreaking SECA-I and SECA-II trials have demonstrated that for selected patients, liver transplantation can offer a dramatic survival advantage. The SECA-II study achieved a <strong>5-year overall survival rate of 83%</strong>, fundamentally changing the conversation around what is possible in transplant oncology.
                    </p>
                  </div>
                  <p>
                    We developed the "Oslo Score," a prognostic scoring system now used internationally to select patients who are most likely to benefit from transplantation.
                  </p>
                </div>
              </div>

              {/* Focus Areas */}
              <div id="focus" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-slate-900">Current Focus Areas</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Colorectal Liver Metastases</h3>
                    <p className="text-slate-600">
                      Continuing the SECA legacy with extended follow-up and the new EXCALIBUR randomized controlled trial.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Intrahepatic Cholangiocarcinoma</h3>
                    <p className="text-slate-600">
                      The TESLA trial investigates transplantation for locally advanced non-resectable ICC after neoadjuvant therapy.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Living Donor Protocols</h3>
                    <p className="text-slate-600">
                      The LD-RAPID protocol utilizes partial liver grafts to expand the donor pool and reduce waiting times.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Biomarker Integration</h3>
                    <p className="text-slate-600">
                      Systematic use of circulating tumor DNA (ctDNA) for patient selection, monitoring, and early relapse detection.
                    </p>
                  </div>
                </div>
              </div>

              {/* Global Impact */}
              <div id="impact" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-slate-900">Global Impact</h2>
                </div>
                <div className="prose prose-lg text-slate-600 max-w-none">
                  <p>
                    Our work extends far beyond Oslo. We are actively involved in international collaborations and consensus meetings to update global guidelines.
                  </p>
                  <p>
                    We collaborate with leading institutions in Denmark, Germany, Italy, the UK, USA, and Canada. Our research has directly influenced the <strong>International Hepato-Pancreato-Biliary Association (IHPBA)</strong> guidelines and continues to shape the future of the field.
                  </p>
                  <div className="mt-8">
                    <Link href="/contact">
                      <Button className="rounded-full px-8">
                        Partner With Us <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
