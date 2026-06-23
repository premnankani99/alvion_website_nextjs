export interface CaseStudyModule {
  num: string;
  title: string;
}

export interface CaseStudyProblem {
  title: string;
  desc: string;
}

export interface CaseStudyOutcome {
  value: string;
  label: string;
}

export interface CaseStudyTechnology {
  name: string;
  icon: string;
  bg: string;
}

export interface CaseStudyKPI {
  title: string;
  value: string;
  trend: string;
  trendDirection: 'up' | 'down';
  sparklineData: number[];
  sparklineColor: string;
  iconType?: 'clock' | 'document' | 'heart';
}

export interface CaseStudyData {
  id: string;
  title: string;
  description: string;
  industry: string;
  projectType: string;
  platform: string;
  overview: string[];
  problemIntro: string;
  problems: CaseStudyProblem[];
  solution: string[];
  modules: CaseStudyModule[];
  outcomes: CaseStudyOutcome[];
  technologies: CaseStudyTechnology[];
  sliderImages?: string[];
  bannerImage?: string;
  summaryText?: string;
  kpiCharts?: string[]; // Legacy image charts
  kpiStats?: CaseStudyKPI[]; // New UI cards
  conclusion?: string[];
  hideConclusion?: boolean;
}
