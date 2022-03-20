import Link from 'next/link';

function Home() {
    return (<div>
        <h1>Home</h1>

        <Link href="/politicas">
            <a>Acessar pagina politicas</a>
        </Link>
        </div>
}

export default Home