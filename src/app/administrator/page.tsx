'use server'

import Link from "next/link"

export default async function AdministratorPage() {
    return (
        <main className="p-6">
            <Link className="p-6" href="/">TOPに戻る</Link>
            <h1 className='text-2xl font-bold p-6'>管理者について</h1>
            <div className="p-6">
                <p>トレーニングおつかれさまです。管理者です。</p>
                <p>筋トレに役立つちょっとした機能を作っていけたらなと思っています。</p>
                <p>管理者はサラリーマンです。</p>
                <p>同じように働きながらトレーニングをしている方に、このWebアプリケーションを使っていただけたら嬉しいです。</p>
                <p>好きなトレーニングはBIG3です。ベンチプレスが特に好きです。</p>
                <p>最近BIG3のトータルが下がってしまったので、一旦元に戻そうと頑張っています。</p>
                <p>調子が悪くてもトータル400kgくらいにはしておきたいものです。</p>
                <p>では、みなさんも筋トレ楽しんで。トレーニング行ってらっしゃい。</p>
            </div>
        </main>
    )
}