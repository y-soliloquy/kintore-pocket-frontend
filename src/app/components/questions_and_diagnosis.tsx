'use client'

import { useState } from 'react'
import DiagnosisResult from './diagnosis'
import Questions from './questions'

export default function QuestionsAndDiagnosis() {
    const [answers, setAnswers] = useState<{ [id: string]: string }>({})
    const [isReady, setIsReady] = useState(false)
    const [totalQuestions, setTotalQuestions] = useState(0)

    return (
        <>
            <Questions
                onAnswersChangeAction={setAnswers}
                onReadyChangeAction={setIsReady}
                onQuestionCountAction={setTotalQuestions}
            />
            <DiagnosisResult
                answers={answers}
                totalQuestions={totalQuestions}
                isReady={isReady}
            />
        </>
    )
}
