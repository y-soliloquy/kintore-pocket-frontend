'use server'

import Link from "next/link"

export default async function PiramidPage() {
    return (
        <main className="p-6">
            <Link className="p-6" href="/">TOPに戻る</Link>
            <h1 className='text-2xl font-bold p-6'>トレーニング志向診断</h1>
            <div className="p-6">
                <p>あなたに向いているトレーニングが何か診断します。</p>
                <p>質問ごとに3つの選択肢があります。</p>
                <p>各質問で1つを選択し、診断ボタンを押してください。</p>
                {/* 質問リストを表示する */}
                {/* APIはquestions */}
                {/* 診断ボタン */}
            </div>
            <div>
                {/* 診断結果を表示する */}
                {/* APIはdiagnosis */}
            </div>
        </main>
    )
}