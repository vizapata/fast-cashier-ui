import { loggerService } from '@/service/logger.service'
import type { LogLevel } from '@/types/log-level'
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  test,
  vi,
  type MockInstance
} from 'vitest'

const LOG_LEVELS = ['debug', 'info', 'warn', 'error'] as LogLevel[]

describe('Checking logging level allowed', () => {
  test('Silent log level should not allow log', () => {
    loggerService.setLogLevel('silent')
    for (const level in LOG_LEVELS) {
      expect(loggerService.shouldLog(level as LogLevel)).toBe(false)
    }
  })

  test('Higger log levels should allow log', () => {
    for (let current = 0; current < LOG_LEVELS.length; current++) {
      loggerService.setLogLevel(LOG_LEVELS[current])
      for (let level = current; level < LOG_LEVELS.length; level++) {
        expect(loggerService.shouldLog(LOG_LEVELS[level] as LogLevel)).toBe(true)
      }
    }
  })

  test('Lower log levels should not allow log', () => {
    for (let current = 1; current < LOG_LEVELS.length; current++) {
      loggerService.setLogLevel(LOG_LEVELS[current])
      for (let level = 0; level < current; level++) {
        expect(loggerService.shouldLog(LOG_LEVELS[level] as LogLevel)).toBe(false)
      }
    }
  })
})

describe('Checking log is performed when logging is enabled', () => {
  let spy: MockInstance
  beforeAll(async () => {
    loggerService.setLogLevel('debug')
  })

  afterEach(async () => {
    spy.mockRestore()
  })

  afterAll(async () => {
    loggerService.setLogLevel('silent')
  })

  test('When log is enabled then call log method (debug level)', () => {
    spy = vi.spyOn(console, 'debug')
    loggerService.debug('test')
    expect(spy).toBeCalledWith('DEBUG: test')
  })

  test('When log is enabled then call log method (info level)', () => {
    spy = vi.spyOn(console, 'info')
    loggerService.info('test')
    expect(spy).toBeCalledWith('INFO: test')
  })

  test('When log is enabled then call log method (Warn level)', () => {
    spy = vi.spyOn(console, 'warn')
    loggerService.warn('test')
    expect(spy).toBeCalledWith('WARN: test')
  })

  test('When log is enabled then call log method (Error level)', () => {
    spy = vi.spyOn(console, 'error')
    loggerService.error('test')
    expect(spy).toBeCalledWith('ERROR: test')
  })
})

describe('Checking log is not performed when logging is disabled', () => {
  let spy: MockInstance
  beforeAll(async () => {
    loggerService.setLogLevel('silent')
  })

  afterEach(async () => {
    spy.mockRestore()
  })

  test('When log is enabled then call log method (debug level)', () => {
    spy = vi.spyOn(console, 'debug')
    loggerService.debug('test')
    expect(spy).not.toBeCalled()
  })

  test('When log is enabled then call log method (info level)', () => {
    spy = vi.spyOn(console, 'info')
    loggerService.info('test')
    expect(spy).not.toBeCalled()
  })

  test('When log is enabled then call log method (Warn level)', () => {
    spy = vi.spyOn(console, 'warn')
    loggerService.warn('test')
    expect(spy).not.toBeCalled()
  })

  test('When log is enabled then call log method (Error level)', () => {
    spy = vi.spyOn(console, 'error')
    loggerService.error('test')
    expect(spy).not.toBeCalled()
  })
})
