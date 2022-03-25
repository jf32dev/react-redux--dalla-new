/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_FRONTLINE: string;
    readonly REACT_APP_MAIN: string;
    readonly REACT_APP_SALES: string;
    readonly REACT_APP_TWM: string;
    readonly REACT_APP_LENDING: string;
  }
}
