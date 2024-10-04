import { removeTrailingSlash } from '@/utils/string'
import { describe, it, expect } from 'vitest'

describe('Test on strings', () => {
  it('should remove all trailing slashes', () => {
    expect(removeTrailingSlash('example/')).toBe('example')
    expect(removeTrailingSlash('example///')).toBe('example')
    expect(removeTrailingSlash('example////')).toBe('example')
  })

  it('should not modify string without trailing slashes', () => {
    expect(removeTrailingSlash('example')).toBe('example')
  })

  it('should return empty string if input is a single slash', () => {
    expect(removeTrailingSlash('/')).toBe('')
  })

  it('should return empty string if input is empty', () => {
    expect(removeTrailingSlash('')).toBe('')
  })
})
