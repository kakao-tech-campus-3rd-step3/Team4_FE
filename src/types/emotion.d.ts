import "@emotion/react";
import { theme } from "@/styles/theme";

type ThemeType = typeof theme;

declare module "@emotion/react" {
  export interface Theme {
    colors: ThemeType["colors"];
    typography: ThemeType["typography"];
    spacing: ThemeType["spacing"];
    layout: ThemeType["layout"];
    borderRadius: ThemeType["borderRadius"];
  }
}
