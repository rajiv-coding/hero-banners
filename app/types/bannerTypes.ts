
export type BannerVariant = "image" | "solid";

export type BannerActionKind = "button" | "link";

export interface BannerAction {
  label: string;
  href: string;
  kind: BannerActionKind;
}

export interface Banner {
  id: string;
  variant: BannerVariant;

  headline: string;
  subheadline?: string;

  background: {
    imageUrl?: string;
    alt?: string;
    color?: string;
  };

  actions?: BannerAction[];
}