import { countriesFR } from "../../common/data/countries";

export const paysOptions = countriesFR.map((country, key) => ({ value: country.alpha2, label: country.name }));
export const genderOptions = [
  { value: "Male", label: "Masculin" },
  { value: "Female", label: "Feminin" },
];
export const civilityOptions = [
  { value: "Célibataire", label: "Célibataire" },
  { value: "Marié", label: "Marié" },
  { value: "Divorcé", label: "Divorcé" },
  { value: "Veuf", label: "Veuf" },
  { value: "Veuve", label: "Veuve" },
];
export const localeOptions = [
  { value: "fr", label: "Français" },
  { value: "en", label: "Anglais" },
];
