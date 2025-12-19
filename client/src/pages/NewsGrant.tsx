import { Link } from "wouter";
import { ArrowLeft, Calendar, Award, FileText, CheckCircle2, Activity, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function NewsGrant() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header Section */}
      <section className="bg-slate-50 py-16 border-b border-slate-100">
        <div className="container max-w-4xl">
          <Link href="/">
            <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary text-slate-500">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-primary/10 text-primary border-none px-3 py-1">
              Latest News
            </Badge>
            <span className="flex items-center text-sm font-medium text-slate-500">
              <Calendar className="w-4 h-4 mr-2" /> December 18, 2025
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
            Oslo Transplant Oncology Group Awarded 9 Million NOK Grant
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            The South-Eastern Norway Regional Health Authority has awarded substantial funding to advance our pioneering research in transplant oncology, specifically supporting the SECA-II Extension and LD-RAPID protocols.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead">
              We are pleased to announce that the Oslo Transplant Oncology Group has received a grant of <strong>9 million NOK</strong> to further advance our research in the field of transplant oncology. This funding will be instrumental in transforming the treatment landscape for patients with incurable colorectal liver metastases (CRLM).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 not-prose">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Scientific Background</h3>
                  <p className="text-slate-600">
                    Building on the success of SECA-I and SECA-II, which demonstrated 5-year survival rates of up to 83% in selected patients, this project aims to establish liver transplantation as a standard of care for non-resectable CRLM.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <Activity className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Project Goals</h3>
                  <p className="text-slate-600">
                    The project will generate the world's most comprehensive prospective dataset on liver transplantation for CRLM, directly informing international guidelines.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2>Key Research Areas</h2>
            <p>
              The grant will specifically support two major initiatives:
            </p>
            
            <h3>1. SECA-II Extension</h3>
            <p>
              This initiative focuses on the continued scientific exploitation of the SECA-II trial, including:
            </p>
            <ul className="list-none pl-0 space-y-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                <span><strong>Extended Follow-up:</strong> Documenting long-term survival (10-year OS) and cure rates.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                <span><strong>Biomarker Integration:</strong> Systematic monitoring of circulating tumor DNA (ctDNA) to improve patient selection and detect early relapse.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                <span><strong>Global Impact:</strong> Publishing updated survival analyses to underpin international guideline revisions.</span>
              </li>
            </ul>

            <h3>2. LD-RAPID Protocol</h3>
            <p>
              The LD-RAPID (Living Donor - Rapid Induction of Regeneration) protocol represents a novel two-stage living donor transplantation approach designed to address organ scarcity:
            </p>
            <ul className="list-none pl-0 space-y-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                <span><strong>Innovation:</strong> Utilizes small left lateral sector grafts (segments 2+3) from living donors.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                <span><strong>Safety:</strong> Minimizes donor risk while expanding the donor pool, adhering to the principle of double equipoise.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                <span><strong>Implementation:</strong> Evaluating safety, feasibility, and outcomes in Norwegian patients.</span>
              </li>
            </ul>

            <h2>Project Leadership</h2>
            <p>
              The project is led by a multidisciplinary team of experts from Oslo University Hospital:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mt-6">
              <Link href="/team/tor-magnus-smedman">
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group">
                  <Users className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                  <div>
                    <div className="font-bold text-slate-900 group-hover:text-primary transition-colors">Tor M. Smedman, MD, PhD</div>
                    <div className="text-sm text-slate-500">Project Manager, PI</div>
                  </div>
                </div>
              </Link>
              <Link href="/team/pal-dag-line">
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group">
                  <Users className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                  <div>
                    <div className="font-bold text-slate-900 group-hover:text-primary transition-colors">Pål-Dag Line, MD, PhD</div>
                    <div className="text-sm text-slate-500">Project Manager, Co-PI</div>
                  </div>
                </div>
              </Link>
              <Link href="/team/svein-dueland">
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group">
                  <Users className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                  <div>
                    <div className="font-bold text-slate-900 group-hover:text-primary transition-colors">Svein Dueland, MD, PhD</div>
                    <div className="text-sm text-slate-500">Project Manager, Co-PI</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 italic">
                This project aims to generate definitive scientific evidence to redefine treatment standards and extend curative intent therapy to patients with advanced-stage colorectal cancer who have previously been limited to palliative options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
