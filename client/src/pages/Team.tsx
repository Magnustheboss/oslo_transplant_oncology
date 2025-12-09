import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const teamMembers = [
  {
    name: "Pål-Dag Line, MD, PhD",
    role: "Group Lead",
    title: "Senior Consultant Transplant Surgeon / Professor",
    image: "/pal_dag_line.webp",
    affiliation: "Oslo University Hospital / University of Oslo",
    bio: "Leading the research group for Transplant Oncology. Pioneered the concept of liver transplantation for colorectal liver metastases."
  },
  {
    name: "Tor Magnus Smedman, MD, PhD",
    role: "Project Manager / PI",
    title: "Consulting Oncologist",
    image: "/tor_magnus_smedman.webp",
    affiliation: "Department of Transplantation Surgery and Oncology, OUH",
    bio: "Project manager for SECA-II and LD-RAPID trials. Focus on clinical coordination and follow-up."
  },
  {
    name: "Svein Dueland, MD, PhD",
    role: "Project Manager / Co-PI",
    title: "Consulting Oncologist",
    image: "/svein_dueland.webp",
    affiliation: "Department of Transplantation Surgery, OUH",
    bio: "Primary Investigator for the SECA trials. Clinical coordinator and trial management expert."
  },
  {
    name: "Sheraz Yaqub, MD, PhD",
    role: "Lead Researcher",
    title: "Senior Consultant HPB Surgeon / Associate Professor",
    image: "/sheraz_yaqub.webp",
    affiliation: "Oslo University Hospital / University of Oslo",
    bio: "Lead investigator for the TESLA trial. Specializes in HPB surgery and recruitment coordination."
  },
  {
    name: "Kristoffer Lassen, MD, PhD",
    role: "Lead Researcher",
    title: "Head of Department of HPB Surgery",
    image: null, // Placeholder if no image
    affiliation: "UiT / Oslo University Hospital",
    bio: "Founder and primary investigator for the Excalibur project. Expert in HPB surgery."
  },
  {
    name: "Åsmund A. Fretland, MD, PhD",
    role: "Lead Researcher",
    title: "Senior Consultant HPB Surgeon",
    image: null,
    affiliation: "Oslo University Hospital",
    bio: "Specializes in minimally invasive HPB surgery and recruitment coordination."
  },
  {
    name: "Marie Lian, RN",
    role: "Study Coordinator",
    title: "Registered Oncological Nurse",
    image: null,
    affiliation: "Oslo University Hospital",
    bio: "Coordinates study activities and patient follow-up."
  }
];

export default function Team() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container text-center max-w-3xl mx-auto">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1">
            Our People
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
            Meet the <span className="text-primary">Experts</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            A multidisciplinary team of surgeons, oncologists, radiologists, and researchers dedicated to advancing transplant oncology.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group bg-white">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 opacity-50">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-3">
                      <Button size="icon" variant="secondary" className="rounded-full h-10 w-10 bg-white/20 hover:bg-white text-white hover:text-primary border-none backdrop-blur-sm">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="secondary" className="rounded-full h-10 w-10 bg-white/20 hover:bg-white text-white hover:text-primary border-none backdrop-blur-sm">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2 border-primary/20 text-primary bg-primary/5">
                      {member.role}
                    </Badge>
                    <h3 className="text-xl font-heading font-bold text-slate-900 leading-tight mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-slate-500">
                      {member.title}
                    </p>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 font-medium">
                    {member.affiliation}
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
