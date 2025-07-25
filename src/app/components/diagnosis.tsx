'use client'

import { useState } from 'react'

type Props = {
    answers: { [id: string]: string }
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

export default function Diagnosis({ answers }: Props) {
    const [result, setResult] = useState<Response | null>(null)
    const [error, setError] = useState<string | null>(null)

    const handleDiagnose = async () => {
        const answerList = Object.values(answers)
        if (answerList.length === 0) return

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
            setResult(data)
            setError(null)
        } catch (err: any) {
            setError(err.message || '診断に失敗しました')
        }
    }

    return (
        <div className="mt-8 p-6">
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleDiagnose}
                disabled={Object.values(answers).length === 0}
            >
                診断する
            </button>

            {error && <p className="text-red-500 mt-4">{error}</p>}

            {result && (
                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-2">あなたのタイプ</h2>
                    {result.results.map((r, idx) => (
                        <div key={idx} className="mb-4">
                            <h3 className="font-semibold">{typeLabels[r.type] || r.type}</h3>
                            <ul className="list-disc ml-6 mt-1">
                                {r.recommendations.map((rec, i) => (
                                    <li key={i}>{rec}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
