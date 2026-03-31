export const configList = [
  {
    key: "origin",
    type: "string",
    variant: "text",
    default: "",
  },
  {
    key: "httpsBasicAuthMode",
    type: "boolean",
    default: false,
  },
  {
    key: "httpsPACAuthMode",
    type: "boolean",
    default: false,
  },
  {
    key: "httpsOAuth2AuthMode",
    type: "boolean",
    default: false,
  },
  {
    key: "username",
    type: "string",
    variant: "text",
    default: "",
  },
  {
    key: "auth",
    type: "string",
    variant: "password",
    default: "",
  },
] as const;

export interface Config {
  origin: string;
  httpsBasicAuthMode: boolean;
  httpsPACAuthMode: boolean;
  httpsOAuth2AuthMode: boolean;
}
