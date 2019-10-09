/* eslint-disable no-var */
/* eslint-disable vars-on-top */
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ResizeObserver from 'resize-observer-polyfill';

declare global {
  interface Analytics extends Array {
    initialize: invoked;
    methods;
    factory;
  }

  interface DOMRectReadOnly {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    readonly left: number;
  }

  interface Window {
    ResizeObserver?: typeof ResizeObserver;
    IntersectionObserver?: typeof IntersectionObserver;
    analytics: SegmentAnalytics.AnalyticsJS;
  }

  type JSONValue =
    | string
    | number
    | boolean
    | JSONObject
    | JSONArray
    | undefined
    | null;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface JSONArray extends Array<JSONValue> {}

  type Store = ApolloClient<InMemoryCache>;

  interface JSONObject {
    [x: string]: JSONValue;
  }

  // All these extensions will be handled by file-loader exporting a generated url
  // Those modules declaration are needed so TS doesn't raise an error

  declare module '*.pdf' {
    const fileUrl: string;
    export default fileUrl;
  }

  declare module '*.jpg' {
    const fileUrl: string;
    export default fileUrl;
  }

  declare module '*.png' {
    const fileUrl: string;
    export default fileUrl;
  }

  declare module '*.svg' {
    const fileUrl: string;
    export default fileUrl;
  }

  declare module '*.ttf' {
    const fileUrl: string;
    export default fileUrl;
  }
}
