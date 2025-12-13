'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

type Props = {
    answers: { [id: string]: string }
    totalQuestions: number
    isReady: boolean
}

type Result = {
    type: string
    recommendations: string[]
}

type Response = {
    results: Result[]
}

const typeLabels: Record<string, string> = {
    A: '筋肥大タイプ',
    B: '筋出力タイプ',
    C: '持久力タイプ',
}

export default function Diagnosis({ answers, totalQuestions, isReady }: Props) {
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    const handleDiagnose = async () => {
        const answerList = Object.values(answers)
        // if (answerList.length !== totalQuestions) return
        if (answerList.length !== totalQuestions) {
            setError('すべての質問に回答してください')
            return
          }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/diagnosis`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers: answerList }),
            })

            if (!res.ok) {
                throw new Error('診断APIの呼び出しに失敗しました')
            }

            const data: Response = await res.json()
            
            const query = new URLSearchParams()
            data.results.forEach(result => {
                query.append('type', result.type)
                result.recommendations.forEach(recommendation => {
                    query.append('recommendation', recommendation)
                })
            })
            router.push(`/diagnosis/result?${query.toString()}`)
        } catch (err: any) {
            setError(err.message || '診断に失敗しました')
        }
    }

    return (
        <div className="mt-8 p-6">
            <button
                className={`px-4 py-2 rounded ${
                    isReady
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                onClick={handleDiagnose}
            >
                診断する
            </button>

            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    )
}
