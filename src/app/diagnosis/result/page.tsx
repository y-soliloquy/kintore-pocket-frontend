'use client'

import Link from 'next/link'
import { useDiagnosisStore } from '@/app/store/diagnosisStore'

const typeLabels: Record<string, string> = {
    A: 'ボディメイクタイプ',
    B: 'パワーリフタータイプ',
    C: '持久力タイプ',
}

const recommendationLinks: Record<string, string> = {
    'ピラミッド法': '/pyramid',
    '5x5法': '/fivetimesfive',
    'アセンディング法': '/ascending',
    'ディセンディング法': '/descending',
    '3x3法': '/threetimesthree'
}

const recommendationImages: Record<string, string> = {
    A: '/diagnosis_results/bodymake-min.png',
    B: '/diagnosis_results/lifter-min.png',
    C: '/diagnosis_results/jog-min.png'
}

export default function DiagnosisResultPage() {
    const results = useDiagnosisStore(state => state.results)

    if (!results) {
        return (
        <main className="p-6">
            <p>診断結果が見つかりません</p>
            <Link href="/">TOPに戻る</Link>
        </main>
        )
    }

    const types = results.map(r => r.type)
    const recommendations = results.flatMap(r => r.recommendations)

    return (
        <main className="p-6">
            <Link className="p-6" href="/">TOPに戻る</Link>
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2">あなたのタイプ</h2>
                {types.map((t, i) => (
                    <div key={i} className="mb-4">
                        <h3 className="font-semibold">＞ {typeLabels[t]}</h3>
                    </div>
                ))}

                <h2 className="text-xl font-bold mb-2">おすすめメニュー</h2>
                <ul className="list-disc ml-6 mt-1">
                    {recommendations.map((r, i) => {
                        const link = recommendationLinks[r]
                        return (
                            <li key={i}>
                                {link ? (
                                    <Link href={link} target='_blank' className="text-blue-300">
                                        {r}
                                    </Link>
                                ) : (
                                    <span>{r}</span> // またはそのまま r
                                )}
                            </li>
                        )
                    })}
                </ul>
                <div>
                    {types.map((t, i) => {
                        const src = recommendationImages[t]
                        return (
                            <div key={i} className="p-6">
                                <img width="100%" src={src} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
