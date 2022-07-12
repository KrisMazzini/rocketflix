import './styles.css'

export function Home() {
    return (
        <main>
            <header>
                <img src="/shuffle.svg" alt="Icon"/>
                <h1>Não sabe o que assistir?</h1>
            </header>
            <form action="" method="get">
                <button type="submit">
                    <img src="/shuffle.svg" alt="Icon" />
                    <p>Encontrar filme</p>
                </button>
            </form>
            <footer>
                <p>
                    Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.
                </p>
            </footer>
        </main>
    )
}