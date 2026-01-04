export type Logger = {
  trace: (message: string, context?: object) => void;
  debug: (message: string, context?: object) => void;
  info: (message: string, context?: object) => void;
  warn: (message: string, context?: object) => void;
  error: (message: string, context?: object) => void;
  fatal: (message: string, context?: object) => void;
};
