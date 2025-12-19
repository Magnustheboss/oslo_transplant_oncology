export interface Project {
  title: string;
  description: string;
  role: string;
}

export interface MemberProfile {
  id: string;
  name: string;
  role: string;
  titles: string[];
  bio: string;
  researchInterests: string[];
  projects: Project[];
  pubmedSearchTerm: string;
  image?: string;
  email?: string;
  social?: {
    orcid?: string;
    linkedin?: string;
    twitter?: string;
    researchgate?: string;
  };
}

import { memberImages } from "./memberImages";

export const members: MemberProfile[] = [
  {
    id: "pal-dag-line",
    name: "Pål-Dag Line",
    role: "Group Leader",
    titles: [
      "Professor of Surgery, University of Oslo",
      "Head of Department of Transplantation Medicine, Oslo University Hospital"
    ],
    bio: "Professor Pål-Dag Line is the leader of the Transplant Oncology Research Group at Oslo University Hospital. He has pioneered the concept of liver transplantation for non-resectable liver metastases from colorectal cancer, initiating the groundbreaking SECA trials. His innovative work includes the development of the RAPID procedure (Resection and Partial Liver Segment 2/3 Transplantation with Delayed Total Hepatectomy), a novel surgical strategy to expand the donor pool. His research focuses on pushing the boundaries of transplant oncology to offer curative treatment options for patients with otherwise terminal malignancies.",
    image: memberImages["content_01"],
    researchInterests: [
      "Liver transplantation for colorectal liver metastases",
      "Transplant oncology",
      "RAPID procedure",
      "Living donor liver transplantation",
      "Abdominal vascular disease"
    ],
    projects: [
      {
        title: "SECA Trials (I, II, III)",
        description: "Leading the series of prospective studies investigating liver transplantation for unresectable colorectal liver metastases, which have established the survival benefits of this approach in selected patients.",
        role: "Principal Investigator"
      },
      {
        title: "RAPID Procedure",
        description: "Development and clinical implementation of the RAPID technique, utilizing small partial liver grafts to treat patients with extensive liver tumors.",
        role: "Innovator & Lead Surgeon"
      }
    ],
    pubmedSearchTerm: "Line PD[Author] AND (Oslo[Affiliation] OR Transplant[Title/Abstract])",
    social: {
      orcid: "0000-0002-5884-9336",
      linkedin: "https://no.linkedin.com/in/p%C3%A5l-dag-line-42966312",
      twitter: "https://x.com/pdline",
      researchgate: "https://www.researchgate.net/profile/Pal-Dag-Line"
    }
  },
  {
    id: "svein-dueland",
    name: "Svein Dueland",
    role: "Consulting Oncologist",
    titles: [
      "Senior Consultant Oncologist, Oslo University Hospital",
      "PhD"
    ],
    bio: "Dr. Svein Dueland is a leading oncologist specializing in gastrointestinal cancers. He has been instrumental in the SECA trials, providing the oncological expertise required to select and manage patients for liver transplantation. His research has been pivotal in demonstrating the long-term survival benefits of transplantation compared to chemotherapy alone for patients with colorectal liver metastases. He actively publishes on prognostic factors and patient selection criteria to optimize outcomes in transplant oncology.",
    image: memberImages["content_02"],
    researchInterests: [
      "Colorectal cancer liver metastases",
      "Systemic chemotherapy and immunotherapy",
      "Prognostic factors in transplant oncology",
      "Patient selection for liver transplantation"
    ],
    projects: [
      {
        title: "SECA Trials",
        description: "Responsible for oncological evaluation and follow-up of patients in the SECA trials, analyzing survival outcomes and prognostic markers.",
        role: "Lead Oncologist"
      },
      {
        title: "Chemotherapy vs. Transplantation",
        description: "Comparative studies analyzing survival outcomes between standard chemotherapy and liver transplantation for non-resectable liver metastases.",
        role: "Researcher"
      }
    ],
    pubmedSearchTerm: "Dueland S[Author] AND (Oslo[Affiliation] OR Cancer[Title/Abstract])",
    social: {
      linkedin: "https://www.linkedin.com/in/svein-dueland-b5b8b813",
      researchgate: "https://www.researchgate.net/profile/Svein-Dueland"
    }
  },
  {
    id: "sheraz-yaqub",
    name: "Sheraz Yaqub",
    role: "HPB Surgeon",
    titles: [
      "Senior Consultant HPB Surgeon, Oslo University Hospital",
      "Associate Professor, University of Oslo",
      "PhD, FEBS"
    ],
    bio: "Dr. Sheraz Yaqub is a Senior Consultant Surgeon specializing in Hepatopancreatobiliary (HPB) surgery. He leads the TESLA trial, investigating liver transplantation for non-resectable intrahepatic cholangiocarcinoma. He is also a key investigator in the EXCALIBUR trial. His work bridges the gap between advanced liver resection techniques and transplantation, focusing on multimodal treatment strategies for complex hepatobiliary malignancies.",
    image: memberImages["content_03"],
    researchInterests: [
      "Intrahepatic cholangiocarcinoma",
      "Colorectal liver metastases",
      "Liver transplantation",
      "Minimally invasive HPB surgery",
      "Multimodal cancer treatment"
    ],
    projects: [
      {
        title: "TESLA Trial",
        description: "Principal Investigator for the TESLA trial, a prospective study evaluating liver transplantation for patients with non-resectable intrahepatic cholangiocarcinoma.",
        role: "Principal Investigator"
      },
      {
        title: "EXCALIBUR Trial",
        description: "Investigator in the EXCALIBUR study, exploring extended criteria treatment for liver metastases with heavy tumor burden.",
        role: "Investigator"
      }
    ],
    pubmedSearchTerm: "Yaqub S[Author] AND (Oslo[Affiliation] OR Liver[Title/Abstract])",
    social: {
      twitter: "https://x.com/YaqubSheraz",
      linkedin: "https://www.linkedin.com/in/sheraz-yaqub-786",
      researchgate: "https://www.researchgate.net/profile/Sheraz-Yaqub-2"
    }
  },
  {
    id: "tor-magnus-smedman",
    name: "Tor Magnus Smedman",
    role: "Consulting Oncologist",
    titles: [
      "Consultant Oncologist, Oslo University Hospital",
      "PhD"
    ],
    bio: "Dr. Tor Magnus Smedman is a dedicated oncologist within the Transplant Oncology Research Group. His PhD thesis focused on liver transplantation for non-resectable liver metastases, contributing significantly to the SECA-II arm D study. He is actively involved in research concerning donor selection, including the use of extended criteria donors, and the quality of life of transplant recipients. His work helps refine the protocols for expanding the applicability of transplant oncology.",
    image: memberImages["content_04"],
    researchInterests: [
      "Liver transplantation for colorectal liver metastases",
      "Extended criteria donors",
      "Quality of life in transplant recipients",
      "Immunosuppression in cancer patients"
    ],
    projects: [
      {
        title: "SECA-II Arm D",
        description: "Key researcher in the SECA-II arm D study, investigating the use of extended criteria donors for liver transplantation in colorectal cancer patients.",
        role: "Researcher"
      },
      {
        title: "Quality of Life Studies",
        description: "Assessment of health-related quality of life in patients treated with liver transplantation compared to standard chemotherapy.",
        role: "Researcher"
      }
    ],
    pubmedSearchTerm: "Smedman TM[Author] OR Smedman T[Author]",
    email: "t.m.smedman@ous-research.no",
    social: {
      twitter: "https://x.com/Smedman_MD",
      orcid: "0000-0002-1531-1229",
      researchgate: "https://www.researchgate.net/profile/Tor-Magnus-Smedman"
    }
  },
  {
    id: "morten-hagness",
    name: "Morten Hagness",
    role: "Transplant Surgeon",
    titles: [
      "Head of Department of Transplant Surgery, Oslo University Hospital",
      "PhD, FEBS"
    ],
    bio: "Dr. Morten Hagness is the Head of the Department of Transplant Surgery and a core member of the research group. He has been involved since the inception of the SECA-I trial. His research encompasses the surgical aspects of liver transplantation, immunosuppression management, and long-term outcomes of transplant recipients. He plays a crucial role in the surgical execution and perioperative management of patients in the group's clinical trials.",
    image: memberImages["content_05"],
    researchInterests: [
      "Liver transplantation surgery",
      "Immunosuppression",
      "Surgical outcomes",
      "Donor organ utilization"
    ],
    projects: [
      {
        title: "SECA Trials",
        description: "Surgical lead and investigator in the SECA trials, focusing on surgical outcomes and the feasibility of transplantation for malignancy.",
        role: "Investigator"
      }
    ],
    pubmedSearchTerm: "Hagness M[Author] AND (Oslo[Affiliation] OR Transplant[Title/Abstract])",
    social: {
      twitter: "https://x.com/HagnessMorten",
      linkedin: "https://no.linkedin.com/in/morten-hagness-83b862220",
      researchgate: "https://www.researchgate.net/profile/Morten-Hagness-2"
    }
  },
  {
    id: "asmund-fretland",
    name: "Åsmund A. Fretland",
    role: "HPB Surgeon",
    titles: [
      "Consultant HPB Surgeon, Oslo University Hospital",
      "PhD"
    ],
    bio: "Dr. Åsmund A. Fretland is a Consultant HPB Surgeon with expertise in minimally invasive liver surgery. He has led randomized controlled trials comparing laparoscopic and open liver resection (OSLO-COMET). His research focuses on surgical techniques, outcomes, and the integration of minimally invasive approaches in transplant oncology.",
    image: memberImages["content_05"], // Using placeholder for now
    researchInterests: [
      "Laparoscopic liver surgery",
      "Colorectal liver metastases",
      "Surgical clinical trials",
      "Enhanced recovery after surgery"
    ],
    projects: [
      {
        title: "OSLO-COMET Trial",
        description: "Principal Investigator for the OSLO-COMET trial, a randomized study comparing laparoscopic and open liver resection for colorectal metastases.",
        role: "Principal Investigator"
      }
    ],
    pubmedSearchTerm: "Fretland AA[Author]",
    social: {
      twitter: "https://x.com/AAfretland",
      researchgate: "https://www.researchgate.net/profile/Asmund-Fretland"
    }
  }
];
