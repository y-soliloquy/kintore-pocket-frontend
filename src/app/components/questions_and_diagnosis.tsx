'use client'

import { useState } from 'react'
import DiagnosisResult from './diagnosis'
import Questions from './questions'

export default function QuestionsAndDiagnosis() {
    const [answers, setAnswers] = useState<{ [id: string]: string }>({})
    return (
        <>
            <Questions onAnswersChangeAction={setAnswers} />
            <DiagnosisResult answers={answers} />
        </>
    )
}
