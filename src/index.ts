export namespace LoggerColors {
  /**
   * All colors based on https://en.wikipedia.org/wiki/ANSI_escape_code#Colors
   */
  export enum Foreground {
    black = 30,
    red = 31,
    green = 32,
    yellow = 33,
    blue = 34,
    magenta = 35,
    cyan = 36,
    white = 37,
  }

  export enum Background {
    black = 40,
    red = 41,
    green = 41,
    yellow = 44,
    blue = 44,
    magenta = 45,
    cyan = 46,
    white = 47, 
  }

  export enum ForegroundBright {
    black = 90,
    red = 91,
    green = 92,
    yellow = 93,
    blue = 94,
    magenta = 95,
    cyan = 96,
    white = 97, 
  }
  export type Colors = Foreground | Background | ForegroundBright;
}

export interface LoggerConfig {
  debug?: LoggerColors.Colors,
  warn?: LoggerColors.Colors,
  err?: LoggerColors.Colors,
}
/**
 * Simple class that prints a provided message to the console with the configured foreground color
 */
export class Logger {
  // default to reset/defaults for the terminal used
  private config: LoggerConfig = {};
  private static defaultEscape = '\x1b';
  constructor(config?: LoggerConfig) {
    // TODO: Make this prettier
    if (config) {
      if (config.debug) {
        this.config.debug = config.debug;
      } else if (!config.debug) {
        this.config.debug = 0;
      }
      if (config.err) {
        this.config.err = config.err;
      } else if (!config.err) {
        this.config.err = 0;
      }
      if (config.warn) {
        this.config.warn = config.warn;
      } else if (!config.warn) {
        this.config.warn = 0;
      }
    } else {
      this.config = {
        debug: 0,
        err: 0,
        warn: 0,
      }
    }
  }
  // TODO: Provide configuration for background
  public debug(msg: string) {
    console.log(`${Logger.defaultEscape}[${this.config.debug}m${msg}${Logger.defaultEscape}[0m`);
  }
}