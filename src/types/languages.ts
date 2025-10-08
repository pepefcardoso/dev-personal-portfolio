import { TranslatableString, OrderableItem } from "./common";

export interface Language extends OrderableItem {
  code: string;
  name: TranslatableString;
  nativeName: string;
  flag?: string;
  isDefault: boolean;
  rtl: boolean;
}

export interface LanguagesData {
  supported: Language[];
}
