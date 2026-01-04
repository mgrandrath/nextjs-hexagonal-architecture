import type { Logger } from "@/core/ports/monitoring-ports";

// This sample implementation only logs to the console. In a real-world
// application, you would integrate a monitoring service.
export const createLoggerService =
  (/* pass runtime configuration like API keys, log level, etc. */): Logger => {
    return {
      trace: (message: string, context?: object) => {
        console.trace(message, context);
      },
      debug: (message: string, context?: object) => {
        console.debug(message, context);
      },
      info: (message: string, context?: object) => {
        console.info(message, context);
      },
      warn: (message: string, context?: object) => {
        console.warn(message, context);
      },
      error: (message: string, context?: object) => {
        console.error(message, context);
      },
      fatal: (message: string, context?: object) => {
        console.error("FATAL:", message, context);
      },
    };
  };
