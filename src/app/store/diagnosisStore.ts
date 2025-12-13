'use client'

import { create } from 'zustand'


type Result = {
  type: string
  recommendations: string[]
}

type DiagnosisState = {
  results: Result[] | null
  setResults: (results: Result[]) => void
  clear: () => void
}

export const useDiagnosisStore = create<DiagnosisState>((set) => ({
  results: null,
  setResults: (results) => set({ results }),
  clear: () => set({ results: null }),
}))
