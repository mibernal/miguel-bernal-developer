export type SocialLink = {
  label: string;
  href: string;
};

export type Metric = {
  label: string;
  value: string;
};

export type CoreValue = {
  title: string;
  description: string;
};

export type ServiceOffer = {
  title: string;
  description: string;
  outcome: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  current?: boolean;
};

export type SkillCategory = {
  category: string;
  skills: string[];
};

export type ProgrammingPoint = {
  title: string;
  description: string;
};

export type ProjectResult = {
  label: string;
  value: string;
};

export type ProjectVerification = "verified" | "pending";

export type ProjectItem = {
  id: string;
  title: string;
  clientContext: string;
  businessGoal: string;
  role: string;
  duration: string;
  fitFor: string;
  verification: ProjectVerification;
  summary: string;
  impact: string;
  results: ProjectResult[];
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
  featured?: boolean;
  caseStudy: {
    challenge: string;
    solution: string;
    outcome: string;
  };
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  company: string;
};
