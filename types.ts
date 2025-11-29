export interface Activity {
  time: string;
  text: string;
  details?: string; // New field for extra info
}

export interface DayPlan {
  date: string;
  title: string;
  logistics: string;
  image: string;
  activities: Activity[];
}

export interface ThemeColors {
  bg: string;
  border: string;
  text: string;
  lightBg: string; // For backgrounds requiring very light opacity
}

export interface ItinerarySection {
  id: string;
  label: string;
  title: string;
  base: string;
  theme: ThemeColors;
  days: DayPlan[];
}

export type ItineraryKey = 'tokyo' | 'osaka' | 'finale';

export interface ItineraryData {
  [key: string]: ItinerarySection;
}