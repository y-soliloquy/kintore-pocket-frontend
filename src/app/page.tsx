import Link from 'next/link'

export default function Home() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div>
                    <h1 className="text-5xl font-bold text-center mx-auto">筋トレ ポケット</h1>
                </div>
                <div>
                    <p>筋トレに役立つちょっとしたWebアプリケーションです。</p>
                    <br />
                    <p>世の中にはリッチな機能がモリモリついたスマホアプリや<br />Webアプリケーションがすでに存在しています。</p>
                    <br />
                    <p>「もっと手軽に利用できるものがあってもいいよなぁ」<br />という考えから本アプリケーションは作られました。</p>
                    <br />
                    <p>「今季のメニューどうしようかなぁ」<br />などを考える際にシュッと利用してみてください。</p>
                </div>
                <div>
                    <h2 className="py-3 text-2xl font-bold">
                        トレーニングメニュー
                    </h2>
                    <h2 className="py-3 pl-6 text-blue-300">
                        <Link href="/threetimesthree">- 3x3法</Link>
                    </h2>
                    <h2 className="py-3 pl-6 text-blue-300">
                        <Link href="/fivetimesfive">- 5x5法</Link>
                    </h2>
                    <h2 className="py-3 pl-6 text-blue-300">
                        <Link href="/pyramid">- ピラミッド法</Link>
                    </h2>
                    <h2 className="py-3 pl-6 text-blue-300">
                        <Link href="/ascending">- アセンディング法</Link>
                    </h2>
                    <h2 className="py-3 pl-6 text-blue-300">
                        <Link href="/descending">- ディセンディング法</Link>
                    </h2>
                    <h2 className="py-3 text-2xl font-bold">
                        インターバル
                    </h2>
                    <h2 className="py-3 pl-6 text-blue-300">
                        <Link href="/diagnosis">- トレーニング志向診断β</Link>
                    </h2>
                    <h2 className="py-3 text-2xl font-bold">
                        その他
                    </h2>
                    <h2 className="py-3 pl-6 text-blue-300">
                        <Link href="/administrator">- 管理者について</Link>
                    </h2>
                </div>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            </footer>
        </div>
    );
}
