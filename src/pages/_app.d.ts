declare let __DEV__: boolean;

declare module '*.scss';
declare module '*.css';
declare module '*.mp3' {
  const content: string;
  export default content;
}
