
function Home({setToken}) {

    return (
        <div>
            <h1>Finance</h1>
            <p>Faça a gestão sustentável do seu dinheiro</p>

            <input 
                type="text" 
                placeholder="Qual é o token?" 
                onChange={(e) => setToken(e.target.value)}
            />
        </div>
    )

}

export default Home;