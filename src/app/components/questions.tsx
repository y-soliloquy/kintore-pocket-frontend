'use client'

import { useEffect, useState } from 'react'

export type Option = {
    label: string
    type: string
}

export type Question = {
    id: string
    title: string
    options: Option[]
}

type Props = {
    onAnswersChangeAction: (answers: { [id: string]: string }) => void
}

export default function Questions({ onAnswersChangeAction }: Props) {
    const [questions, setQuestions] = useState<Question[]>([])
    const [answers, setAnswers] = useState<{ [id: string]: string }>({})

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/questions`)
            .then(res => res.json())
            .then(setQuestions)
            .catch(err => {
                console.error('質問の取得に失敗しました', err)
            })
    }, [])

    useEffect(() => {
        onAnswersChangeAction(answers)
    }, [answers, onAnswersChangeAction])

    const handleSelect = (questionId: string, answerType: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: answerType }))
    }

    return (
        <div className="p-6">
            {questions.map((q) => (
                <div key={q.id} className="mb-4">
                    <p className="font-semibold">{q.title}</p>
                    {q.options.map((opt, i) => (
                        <label key={i} className="block">
                            <input
                                type="radio"
                                name={`q-${q.id}`}
                                value={opt.type}
                                checked={answers[q.id] === opt.type}
                                onChange={() => handleSelect(q.id, opt.type)}
                                className="mr-2"
                            />
                            {opt.label}
                        </label>
                    ))}
                </div>
            ))}
        </div>
    )
}
