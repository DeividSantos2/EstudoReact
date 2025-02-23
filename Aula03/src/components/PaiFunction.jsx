import FilhoFunction from "./FilhoFunction"

const paiFunction = () => {

    const handleChildCLick = () => {
        console.log('Clicou no filho')
    }

    return (
        <div>
            <h1>Função Pai</h1>
            <FilhoFunction onChildClick={handleChildCLick}/>
        </div>
    )
}

export default paiFunction