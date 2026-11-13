export type Category =
  | "chat"
  | "image"
  | "video"
  | "audio"
  | "code"
  | "search"
  | "agent"
  | "local"
  | "platform";

export type FreeLevel = "yes" | "limited" | "no";

export type Lang = "zh" | "en";

export interface LocalizedText {
  zh: string;
  en: string;
}

export interface Capabilities {
  vision: boolean;
  image: boolean;
  video: boolean;
  audio: boolean;
  code: boolean;
}

export interface Item {
  id: string;
  name: string;
  vendor: string;
  cat: Category;
  url: string;
  desc: LocalizedText;
  free: FreeLevel;
  quota: LocalizedText;
  caps: Capabilities;
}

export interface Catalog {
  updated: string;
  items: Item[];
}

export const updated: string;
export const items: Item[];
export const CATEGORIES: Category[];
export const CAPS: (keyof Capabilities)[];

export function byCategory(cat: Category | "all"): Item[];
export function getById(id: string): Item | null;
export function search(query: string, lang?: Lang): Item[];

declare const data: Catalog;
export default data;
