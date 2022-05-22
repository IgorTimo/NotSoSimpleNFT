import React from 'react'
import { useErrorBoundary } from 'use-error-boundary'

export const ErrorBoundary = ({ children }) => {
  const { ErrorBoundary: ErrBoudary, didCatch, error } = useErrorBoundary()

  return didCatch ? (
    <p>An error has been catched: {error.message}</p>
  ) : (
    <ErrBoudary>{children}</ErrBoudary>
  )
}
