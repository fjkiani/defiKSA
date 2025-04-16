import { LearningConcept } from '@/components/docs/DocsNav';

export interface LearningConceptWithContent extends LearningConcept {
  simpleContent: string;
  technicalContent?: string;
} 