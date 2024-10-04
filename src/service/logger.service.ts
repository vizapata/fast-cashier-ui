import type { LogLevel } from '@/types/log-level'

class Logger {
  private static instance: Logger
  private static levels: LogLevel[] = ['silent', 'debug', 'info', 'warn', 'error']

  private constructor() {}

  private logLevel: LogLevel = import.meta.env.VITE_APP_LOG_LEVEL ?? 'warn'

  public shouldLog(level: LogLevel): boolean {
    const desiredLevel = Logger.levels.indexOf(level)
    const currentLevel = Logger.levels.indexOf(this.logLevel)
    return currentLevel > 0 && desiredLevel >= currentLevel
  }

  public setLogLevel(level: LogLevel): void {
    this.logLevel = level
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  public debug(message: string): void {
    if (this.shouldLog('info')) {
      console.debug(`DEBUG: ${message}`)
    }
  }

  public info(message: string): void {
    if (this.shouldLog('info')) {
      console.info(`INFO: ${message}`)
    }
  }

  public warn(message: string): void {
    if (this.shouldLog('warn')) {
      console.warn(`WARN: ${message}`)
    }
  }

  public error(message: string): void {
    if (this.shouldLog('error')) {
      console.error(`ERROR: ${message}`)
    }
  }
}

export const loggerService = Logger.getInstance()
