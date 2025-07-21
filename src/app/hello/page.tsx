'use server'

export default async function HelloPage() {
    // リポジトリのデプロイ先が決まったら、そこのパスを利用する。.envで管理する
    const res = fetch(`${process.env.NEXT_PUBLIC_API_URL}/hello`, {
        cache: 'no-store'
    })

    const message = await (await res).text()

    return (
        <main className='p-6'>
            <h1 className='text-2xl font-bold'>Wellcome!</h1>
            <p className='mt-4'>{message}</p>
        </main>
    )
}
