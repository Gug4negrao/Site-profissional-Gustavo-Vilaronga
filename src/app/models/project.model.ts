export interface ProjectLink {
  label: string;
  url: string;
  icon?: string;
  primary?: boolean;
}

export type ProjectPreview =
  | { kind: 'iframe'; src: string }
  | { kind: 'image'; src: string; alt?: string };

export interface Project {
  title: string;
  descriptionKey: string;
  tags: string[];
  links: ProjectLink[];
  accent?: string;
  preview?: ProjectPreview;
}
