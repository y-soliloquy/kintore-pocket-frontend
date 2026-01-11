'use server'

import Link from "next/link"

export default async function ReferencePage() {

    return (
        <main className="p-6">
            <Link className="p-6" href="/">TOPに戻る</Link>
            <h1>参考動画画面</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/gIkxdKNnN6o?si=oQ_XfQzZI5JjZblm" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </main>
    )
}