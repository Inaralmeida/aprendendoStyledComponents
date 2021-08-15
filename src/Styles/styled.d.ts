import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    primary: string;
    secundary: string;
    terciary: string;
    background: string;
    backgroundSecundary: string;
    text: string;
    textTitle: string;
    shadow: string;
  }
}
