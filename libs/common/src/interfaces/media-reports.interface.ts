export interface MediaCoverage {
  id: string;
  date: Date;
  mediaOutlet: string;
  mediaType: 'newspaper' | 'television' | 'radio' | 'online' | 'magazine' | 'blog' | 'social-media' | 'podcast' | 'other';
  headline: string;
  journalist?: string;
  tone: 'positive' | 'neutral' | 'negative' | 'mixed';
  reach: number;
  keyMessages: string[];
  quotes: string[];
  accuracy: 'accurate' | 'mostly-accurate' | 'some-inaccuracies' | 'inaccurate';
  followUpRequired: boolean;
  url?: string;
  attachments: string[];
}

export interface PressRelease {
  id: string;
  title: string;
  date: Date;
  distributionDate: Date;
  distributionChannels: string[];
  targetAudience: string[];
  keyMessages: string[];
  quotes: {
    speaker: string;
    title: string;
    quote: string;
  }[];
  mediaContacts: string[];
  pickupRate: number;
  reach: number;
  url?: string;
  attachments: string[];
}

export interface SocialMediaPost {
  id: string;
  platform: 'facebook' | 'twitter' | 'linkedin' | 'instagram' | 'youtube' | 'tiktok' | 'other';
  date: Date;
  content: string;
  mediaType: 'text' | 'image' | 'video' | 'carousel' | 'story' | 'live';
  engagement: {
    likes: number;
    shares: number;
    comments: number;
    views: number;
    reach: number;
  };
  hashtags: string[];
  mentions: string[];
  url?: string;
}

export interface ProjectHighlight {
  id: string;
  title: string;
  date: Date;
  category: 'milestone' | 'innovation' | 'safety' | 'sustainability' | 'community' | 'award' | 'partnership' | 'technology' | 'other';
  description: string;
  significance: string;
  stakeholders: string[];
  mediaValue: number;
  photos: string[];
  videos: string[];
  communicated: boolean;
  communicationChannels: string[];
}

export interface MediaInquiry {
  id: string;
  date: Date;
  journalist: string;
  mediaOutlet: string;
  contactInfo: string;
  topic: string;
  urgency: 'low' | 'medium' | 'high' | 'urgent';
  deadline?: Date;
  questions: string[];
  response?: string;
  responseDate?: Date;
  followUpRequired: boolean;
  approved: boolean;
}

export interface MediaPRReport {
  projectId: string;
  projectName: string;
  reportDate: Date;
  reportingPeriod: {
    startDate: Date;
    endDate: Date;
  };
  prManager: {
    name: string;
    title: string;
    organization: string;
    contact: string;
  };
  
  mediaSummary: {
    totalCoverage: number;
    positiveCoverage: number;
    neutralCoverage: number;
    negativeCoverage: number;
    totalReach: number;
    pressReleases: number;
    socialMediaPosts: number;
    mediaInquiries: number;
    projectHighlights: number;
  };
  
  mediaCoverage: MediaCoverage[];
  pressReleases: PressRelease[];
  socialMediaPosts: SocialMediaPost[];
  projectHighlights: ProjectHighlight[];
  mediaInquiries: MediaInquiry[];
  
  coverageByOutlet: {
    outlet: string;
    articles: number;
    tone: 'positive' | 'neutral' | 'negative' | 'mixed';
    reach: number;
  }[];
  
  coverageByType: {
    newspaper: MediaCoverage[];
    television: MediaCoverage[];
    radio: MediaCoverage[];
    online: MediaCoverage[];
    magazine: MediaCoverage[];
    blog: MediaCoverage[];
    socialMedia: MediaCoverage[];
    podcast: MediaCoverage[];
    other: MediaCoverage[];
  };
  
  socialMediaByPlatform: {
    facebook: SocialMediaPost[];
    twitter: SocialMediaPost[];
    linkedin: SocialMediaPost[];
    instagram: SocialMediaPost[];
    youtube: SocialMediaPost[];
    tiktok: SocialMediaPost[];
    other: SocialMediaPost[];
  };
  
  highlightsByCategory: {
    milestone: ProjectHighlight[];
    innovation: ProjectHighlight[];
    safety: ProjectHighlight[];
    sustainability: ProjectHighlight[];
    community: ProjectHighlight[];
    award: ProjectHighlight[];
    partnership: ProjectHighlight[];
    technology: ProjectHighlight[];
    other: ProjectHighlight[];
  };
  
  negativeCoverage: MediaCoverage[];
  pendingInquiries: MediaInquiry[];
  
  keyMessages: {
    primary: string[];
    secondary: string[];
    reactive: string[];
  };
  
  mediaContacts: {
    name: string;
    outlet: string;
    beat: string;
    contact: string;
    relationship: 'strong' | 'moderate' | 'weak' | 'new';
  }[];
  
  upcomingOpportunities: {
    opportunity: string;
    date: Date;
    mediaValue: number;
    preparationRequired: string[];
    keyMessages: string[];
  }[];
  
  metrics: {
    totalReach: number;
    totalEngagement: number;
    sentimentScore: number;
    shareOfVoice: number;
    mediaValue: number;
  };
  
  actionItems: string[];
  recommendations: string[];
}