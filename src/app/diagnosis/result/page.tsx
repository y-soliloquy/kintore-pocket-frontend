'use client'

import { useSearchParams } from 'next/navigation'

const typeLabels: Record<string, string> = {
  A: '筋肥大タイプ',
  B: '筋出力タイプ',
  C: '持久力タイプ',
}

export default function DiagnosisResultPage() {
  const searchParams = useSearchParams()
  const types = searchParams.getAll('type') // ?type=A&type=B
  const recommendations = searchParams.getAll('rec') // ?rec=ピラミッド法

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">あなたのタイプ</h2>
      {types.map((t, i) => (
        <div key={i} className="mb-4">
          <h3 className="font-semibold">{typeLabels[t] || t}</h3>
        </div>
      ))}

      <h3 className="font-semibold mt-4">おすすめメニュー</h3>
      <ul className="list-disc ml-6 mt-1">
        {recommendations.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  )
}
