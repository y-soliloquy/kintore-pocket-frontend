import Link from "next/link"
import QuestionsAndDiagnosis from "../components/questions_and_diagnosis"

export default function DiagnosisPage() {
    // クライアント側のステートが必要なので useState は使わない
    return (
        <main className="p-6">
            <Link className="p-6" href="/">TOPに戻る</Link>
            <h1 className='text-2xl font-bold p-6'>トレーニング志向診断</h1>
            <div className="p-6">
                <p>あなたに向いているトレーニングが何か診断します。</p>
                <p>質問ごとに3つの選択肢があります。</p>
                <p>各質問で1つを選択し、診断ボタンを押してください。</p>
            </div>
            <div className="mt-6 space-y-6">
                {/* クライアント側のステート管理は中のコンポーネントに任せる */}
                <QuestionsAndDiagnosis />
            </div>
        </main>
    )
}
