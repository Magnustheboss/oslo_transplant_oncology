import { Link } from "wouter";

import { ArrowRight, FileText, Users, Activity, Globe, Calendar, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-transplant.jpg" 
            alt="Transplant Oncology Visualization" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
        </div>

        <div className="container relative z-10 pt-20">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <Badge className="mb-6 bg-accent/90 hover:bg-accent text-white border-none px-4 py-1.5 text-sm font-medium tracking-wide uppercase backdrop-blur-sm">
              Pioneering Medical Research
            </Badge>
            <h1 className="text-4xl md:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Redefining Survival in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Transplant Oncology</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-200 mb-10 font-light leading-relaxed max-w-2xl">
              The Oslo Transplant Oncology Group is leading the world in establishing liver transplantation as a curative option for non-resectable colorectal liver metastases.
            </p>
            <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4">
              <Link href="/research">
                <Button size="lg" className="rounded-full px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-105">
                  Explore Our Research
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm transition-all">
                  About the Group
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="py-20 bg-white relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="text-center px-4 py-4 group hover:-translate-y-1 transition-transform duration-300">
              <div className="text-6xl font-heading font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">83%</div>
              <div className="text-lg font-medium text-slate-900 mb-2">5-Year Survival Rate</div>
              <p className="text-slate-500 leading-relaxed">
                Achieved in selected CRLM patients after liver transplantation in SECA trials, compared to &lt;10% with chemotherapy alone.
              </p>
            </div>
            <div className="text-center px-4 py-4 group hover:-translate-y-1 transition-transform duration-300">
              <div className="text-6xl font-heading font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">1st</div>
              <div className="text-lg font-medium text-slate-900 mb-2">Global Innovation</div>
              <p className="text-slate-500 leading-relaxed">
                First group worldwide to establish liver transplantation for non-resectable CRLM as a valid treatment option.
              </p>
            </div>
            <div className="text-center px-4 py-4 group hover:-translate-y-1 transition-transform duration-300">
              <div className="text-6xl font-heading font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">4+</div>
              <div className="text-lg font-medium text-slate-900 mb-2">Major Ongoing Trials</div>
              <p className="text-slate-500 leading-relaxed">
                Including SECA-II Extension, LD-RAPID, TESLA, and EXCALIBUR trials pushing the boundaries of oncology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1">
                Latest Updates
              </Badge>
              <span className="text-sm font-medium text-slate-500">December 18, 2025</span>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full -mr-10 -mt-10" />
              
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4 relative z-10">
                Major Grant Awarded for Transplant Oncology Research
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6 relative z-10">
                We are pleased to announce that the Oslo Transplant Oncology Group has been awarded a grant of <span className="font-bold text-slate-900">9 million NOK</span> from the <span className="font-semibold text-primary">South-Eastern Norway Regional Health Authority</span>.
              </p>
              
              <p className="text-slate-600 leading-relaxed relative z-10 mb-6">
                This substantial funding will be instrumental in further advancing our pioneering research in the field of transplant oncology, supporting our ongoing clinical trials and translational studies aimed at improving survival outcomes for patients with non-resectable liver malignancies.
              </p>
              
              <div className="relative z-10">
                <Link href="/news/grant-award-2025">
                  <Button variant="outline" className="group">
                    Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Feed */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-2xl w-full">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Connect With Us</h3>
                <p className="text-slate-600 mb-6">
                  Our team is active on social media platforms, sharing insights on transplant oncology, surgical innovations, and clinical trial results.
                </p>
                <div className="space-y-4">
                  <a href="https://x.com/pdline" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all group">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Follow Pål-Dag Line</div>
                      <div className="text-sm text-slate-500">@pdline</div>
                    </div>
                    <ArrowRight className="ml-auto w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                  </a>
                  
                  <a href="https://x.com/Smedman_MD" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all group">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Follow Magnus Smedman</div>
                      <div className="text-sm text-slate-500">@Smedman_MD</div>
                    </div>
                    <ArrowRight className="ml-auto w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                  </a>

                  <a href="https://x.com/YaqubSheraz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all group">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Follow Sheraz Yaqub</div>
                      <div className="text-sm text-slate-500">@YaqubSheraz</div>
                    </div>
                    <ArrowRight className="ml-auto w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                  </a>

                  <a href="https://x.com/HagnessMorten" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all group">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Follow Morten Hagness</div>
                      <div className="text-sm text-slate-500">@HagnessMorten</div>
                    </div>
                    <ArrowRight className="ml-auto w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                  </a>

                  <a href="https://x.com/AAfretland" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all group">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Follow Åsmund A. Fretland</div>
                      <div className="text-sm text-slate-500">@AAfretland</div>
                    </div>
                    <ArrowRight className="ml-auto w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-primary font-heading font-bold text-4xl mb-4">Pioneering Clinical Trials</h2>
              <p className="text-slate-600 text-lg">
                Our research focuses on expanding the limits of liver transplantation for oncological indications through rigorous prospective studies.
              </p>
            </div>
            <Link href="/research">
              <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/5 font-semibold group">
                View All Trials <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* SECA-II Card */}
            <Card className="group border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white h-full flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/90 mix-blend-multiply z-10" />
                <img src="/images/research-abstract.jpg" alt="SECA-II" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 z-20">
                  <Badge className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-md">
                    Landmark Study
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  SECA-II Extension
                </h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  Extended follow-up and survival analysis of the world's largest prospective CRLM transplant cohort, integrating ctDNA biomarkers.
                </p>
                <Link href="/research#seca">
                  <span className="inline-flex items-center text-sm font-bold text-primary group-hover:underline underline-offset-4">
                    Read Protocol <ChevronRight className="ml-1 w-4 h-4" />
                  </span>
                </Link>
              </CardContent>
            </Card>

            {/* LD-RAPID Card */}
            <Card className="group border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white h-full flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-accent/80 mix-blend-multiply z-10" />
                <img src="/images/surgical-precision.jpg" alt="LD-RAPID" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 z-20">
                  <Badge className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-md">
                    Surgical Innovation
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  LD-RAPID Protocol
                </h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  A novel two-stage living donor transplantation strategy addressing organ scarcity by utilizing small segmental liver grafts (segments 2+3).
                </p>
                <Link href="/research#rapid">
                  <span className="inline-flex items-center text-sm font-bold text-primary group-hover:underline underline-offset-4">
                    Learn More <ChevronRight className="ml-1 w-4 h-4" />
                  </span>
                </Link>
              </CardContent>
            </Card>

            {/* TESLA Card */}
            <Card className="group border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white h-full flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-800/80 mix-blend-multiply z-10" />
                <img src="/images/tesla-trial.jpg" alt="TESLA" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 z-20">
                  <Badge className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-md">
                    Multicenter
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  TESLA trials
                </h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  Liver transplantation for non-resectable intrahepatic cholangiocarcinoma: A prospective exploratory trial.
                </p>
                <Link href="/research#tesla">
                  <span className="inline-flex items-center text-sm font-bold text-primary group-hover:underline underline-offset-4">
                    Learn More <ChevronRight className="ml-1 w-4 h-4" />
                  </span>
                </Link>
              </CardContent>
            </Card>

            {/* SURE-LT Card */}
            <Card className="group border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white h-full flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-emerald-800/80 mix-blend-multiply z-10" />
                <img src="/images/surgical-precision.jpg" alt="SURE-LT" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 z-20">
                  <Badge className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-md">
                    New Protocol
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  SURE-LT
                </h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  A novel transplant approach for locally advanced unresectable perihilar cholangiocarcinoma.
                </p>
                <Link href="/research#sure-lt">
                  <span className="inline-flex items-center text-sm font-bold text-primary group-hover:underline underline-offset-4">
                    Learn More <ChevronRight className="ml-1 w-4 h-4" />
                  </span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement / About Preview */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
              <div className="relative z-10 grid grid-cols-1 gap-4">
                <div className="space-y-4 mt-12">
                  <div className="bg-slate-900 p-6 rounded-2xl text-white shadow-xl">
                    <div className="text-3xl font-bold text-accent mb-1">20+</div>
                    <div className="text-sm text-slate-300">Years of Experience</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Activity className="w-4 h-4" />
                <span>Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                Converting Inoperable to <span className="text-primary">Curable</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                For patients with non-resectable colorectal liver metastases, the diagnosis has long meant a poor prognosis. Our group is challenging this paradigm.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Through the SECA trials, we have demonstrated the potential for dramatically improved outcomes. Now, we are extending this work with new protocols, advanced biomarker monitoring, and international collaboration to redefine treatment standards.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Global Network</h4>
                    <p className="text-sm text-slate-500">Collaborating with leading centers in Europe and North America.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Expert Team</h4>
                    <p className="text-sm text-slate-500">Multidisciplinary team of surgeons, oncologists, and researchers.</p>
                  </div>
                </div>
              </div>

              <Link href="/team">
                <Button className="rounded-full px-8 h-12 font-semibold">
                  Meet the Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Publications Preview */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Latest Publications</h2>
            <p className="text-slate-600 text-lg">
              Our findings are published in top-tier medical journals, contributing to the global body of knowledge in transplant oncology.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <a href="https://jamanetwork.com/journals/jamasurgery/fullarticle/2804664" target="_blank" rel="noreferrer" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all flex gap-4 items-start">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                    Long-Term Survival, Prognostic Factors, and Selection of Patients With Colorectal Cancer for Liver Transplant
                  </h3>
                  <p className="text-slate-500 text-sm mb-2">Dueland et al. • JAMA Surgery • 2023</p>
                  <p className="text-slate-600 text-sm line-clamp-2">
                    A nonrandomized controlled trial demonstrating superior survival outcomes for liver transplantation compared to standard of care.
                  </p>
                </div>
              </div>
            </a>

            <a href="#" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all flex gap-4 items-start">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                    Liver transplantation for locally advanced non-resectable intrahepatic cholangiocarcinoma treated with neoadjuvant therapy
                  </h3>
                  <p className="text-slate-500 text-sm mb-2">Yaqub et al. • British Journal of Surgery • 2025</p>
                  <p className="text-slate-600 text-sm line-clamp-2">
                    Early results from the TESLA trials showing promising outcomes for selected patients with intrahepatic cholangiocarcinoma.
                  </p>
                </div>
              </div>
            </a>

            <div className="text-center pt-8">
              <Link href="/publications">
                <Button variant="outline" className="rounded-full px-8 border-primary/20 text-primary hover:bg-primary/5">
                  View All Publications
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/collaboration-network.jpg')] bg-cover bg-center mix-blend-overlay" />
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Advancing the Future of Cancer Treatment
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
            We are always looking for partners, researchers, and supporters to join us in our mission to save lives through innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 rounded-full px-8 font-bold shadow-lg">
                Contact Us
              </Button>
            </Link>
            <Link href="/research">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 font-bold">
                Learn About Trials
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
