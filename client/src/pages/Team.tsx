import { Link } from "wouter";
import { ArrowRight, Mail, Linkedin, GraduationCap, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Team data structure
const leadership = [
  {
    id: "pal-dag-line",
    name: "Pål-Dag Line",
    role: "Group Leader & Professor",
    image: null,
    bio: "Professor of Surgery and Head of the Department of Transplantation Medicine. Pioneer of the SECA trials and the RAPID technique.",
    affiliation: "University of Oslo / OUS"
  }
];

const coreMembers = [
  {
    id: "svein-dueland",
    name: "Svein Dueland",
    role: "Consulting Oncologist",
    image: null,
    bio: "Key investigator in the SECA trials, focusing on oncological selection criteria and chemotherapy protocols.",
    affiliation: "Oslo University Hospital"
  },
  {
    id: "tor-magnus-smedman",
    name: "Tor Magnus Smedman",
    role: "Consulting Oncologist",
    image: null,
    bio: "Specializes in colorectal liver metastases and living donor protocols. Leading the LD-RAPID initiative.",
    affiliation: "Oslo University Hospital"
  },
  {
    id: "sheraz-yaqub",
    name: "Sheraz Yaqub",
    role: "Lead, TESLA Trials",
    image: null,
    bio: "Leading the TESLA trial for intrahepatic cholangiocarcinoma. Expert in hepatobiliary surgery and clinical trials.",
    affiliation: "Oslo University Hospital"
  },
  {
    id: "morten-hagness",
    name: "Morten Hagness",
    role: "Transplant Surgeon",
    image: null,
    bio: "Experienced transplant surgeon with a focus on complex liver malignancies and surgical innovation.",
    affiliation: "Oslo University Hospital"
  },
  {
    name: "Harald Grut",
    role: "Researcher",
    image: null,
    bio: "Focuses on radiological assessment and prognostic modeling for transplant oncology candidates.",
    affiliation: "Oslo University Hospital"
  },
  {
    name: "Jon Magnus Aarstrand Solheim",
    role: "Researcher",
    image: null,
    bio: "Experienced transplant surgeon with a focus on complex liver malignancies and surgical innovation.",
    affiliation: "University of Oslo"
  },
  {
    name: "Maria Gjerde",
    role: "Study Nurse",
    image: null,
    bio: "Pivotal to the follow-up of patients and the group's ongoing prospective studies and data analysis.",
    affiliation: "Oslo University Hospital"
  },
  {
    name: "Åsmund A. Fretland",
    role: "HPB Surgeon",
    image: null,
    bio: "Expert in minimally invasive surgery and clinical trials.",
    affiliation: "Oslo University Hospital"
  }
];

const associatedMembers = [
  { name: "Kristoffer Lassen", role: "Associate Member", affiliation: "Oslo University Hospital" },
  { name: "Mona-Elisabeth Revheim", role: "Associate Member", affiliation: "Oslo University Hospital" },
  { name: "Trygve Syversveen", role: "Associate Member", affiliation: "Oslo University Hospital" },
  { 
    name: "Jarle Hetland Bjørlin", 
    role: "Art Director", 
    affiliation: "DVEG Oslo",
    link: "https://dvegoslo.no",
    bio: "With over 22 years of experience as an Art Director in the advertising industry, Jarle is a highly skilled graphic designer. He is responsible for crafting high-impact graphical abstracts and refining complex figures and illustrations for the group's publications and international presentations."
  }
];

const internationalPartners = [
  {
    name: "Karen-Lise Garm Spindler",
    role: "Professor & Senior Consultant",
    affiliation: "Aarhus University Hospital, Denmark",
    bio: "Professor of Clinical Oncology specializing in gastrointestinal cancers. A leading expert in liquid biopsies and ctDNA, she heads the Danish Anal Cancer Group and drives international research on integrating ctDNA into personalized cancer treatment."
  },
  {
    name: "Niels Pallisgaard",
    role: "Professor & Molecular Biologist",
    affiliation: "Zealand University Hospital, Denmark",
    bio: "Head of the Molecular Unit at the Department of Pathology. A pioneer in developing ultrasensitive methods for detecting circulating tumor DNA (ctDNA), focusing on its clinical application for monitoring treatment response and early recurrence."
  }
];

export default function Team() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1">
              Our People
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
              Meet the <span className="text-primary">Experts</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              A multidisciplinary team of surgeons, oncologists, and researchers dedicated to pushing the boundaries of cancer treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-12 text-center">Group Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-center">
              {leadership.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row">
                  {/* Image removed as requested */}
                  <div className="p-8 md:w-2/3 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-primary border-primary/20">{member.role}</Badge>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{member.name}</h3>
                    <p className="text-slate-600 text-lg mb-6">{member.bio}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        {member.affiliation}
                      </div>
                    </div>
                    {member.id && (
                      <Link href={`/team/${member.id}`}>
                        <Button variant="outline" className="w-fit">
                          View Full Profile <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Members */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-2xl font-heading font-bold text-slate-900 mb-12 text-center">Core Research Group</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreMembers.map((member, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-md transition-shadow overflow-hidden">
                {/* Image removed as requested */}
                <CardHeader>
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{member.role}</span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <GraduationCap className="w-3 h-3" /> {member.affiliation}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                    {member.bio}
                  </p>
                  {member.id && (
                    <Link href={`/team/${member.id}`}>
                      <Button variant="ghost" className="w-full justify-between hover:bg-primary/5 hover:text-primary group-hover:text-primary">
                        View Profile <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Associated Members */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-2xl font-heading font-bold text-slate-900 mb-12 text-center">Associated Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {associatedMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-100 text-center hover:border-primary/30 transition-colors group relative flex flex-col h-full">
                {/* @ts-ignore */}
                {member.link && (
                  /* @ts-ignore */
                  <a href={member.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`Visit ${member.name}'s website`} />
                )}
                <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mb-4 group-hover:bg-primary/5 group-hover:text-primary transition-colors shrink-0">
                  <User className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-xs text-slate-500 mb-3">{member.affiliation}</p>
                {/* @ts-ignore */}
                {member.bio && (
                  /* @ts-ignore */
                  <p className="text-sm text-slate-600 mb-4 flex-grow">{member.bio}</p>
                )}
                <div className="mt-auto">
                  <Badge variant="secondary" className="text-xs font-normal bg-slate-100 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {member.role}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Partners */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-2xl font-heading font-bold text-slate-900 mb-12 text-center">International Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {internationalPartners.map((partner, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{partner.role}</span>
                  </div>
                  <CardTitle className="text-xl">{partner.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <GraduationCap className="w-3 h-3" /> {partner.affiliation}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {partner.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Interested in Collaboration?</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            We are always looking to expand our network of researchers and clinical partners.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-8 bg-white text-slate-900 hover:bg-slate-100">
              Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
