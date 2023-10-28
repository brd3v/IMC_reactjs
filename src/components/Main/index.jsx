import { useState } from "react"
import styles from './Main.module.css'
const Main = () => {
    const[altura, setAltura] =useState()
    const[peso, setPeso]= useState()
    const[imc, setImc] = useState()
    let thisImc = parseFloat(imc)
    thisImc = thisImc.toFixed()
    const clicou = () => {
 parseInt(setImc(parseFloat(peso) / ((parseFloat(altura)) * (parseFloat(altura))))).toFixed(1)
    }
    const filtraResultado = () => {
        if (thisImc <= 16.9){
            return (<p>Seu Imc é {thisImc} e você está <strong>MUITO</strong> abaixo do peso</p>)
        } else if (thisImc > 16.9, thisImc < 18.4){
            return (<p>Seu Imc é {thisImc} e você está  abaixo do peso</p>)
        } else if ( thisImc > 18.4, thisImc < 24.9 ){
            return (<p>Seu Imc é {thisImc} parabéns seu peso é ideal</p>)
        } else if (thisImc > 24.9, thisImc < 29.9){
            return (<p>Seu Imc é {thisImc} e você está acima do peso</p>)
        } else if(thisImc > 29.9, thisImc < 34.9){
            return (<p>Seu Imc é {thisImc} Cuidado!!! <strong>Obesidade grau 1</strong> </p>)
        }else if(thisImc > 34.9, thisImc < 40){
            return (<p>Seu Imc é {thisImc} Cuidado!!! <strong>Obesidade grau 2</strong> </p>)
        }else if(thisImc < 40){
            return (<p>Seu Imc é {thisImc} Cuidado!!! <strong>Obesidade grau 3</strong> </p>)
        } else{
            console.log('aguardando ...')
        }
    }
    return (
        <div className={styles.main}>
        
            <form className={styles.formulario} onSubmit={e => e.preventDefault()}>
                <input className={styles.input} onChange={e => setAltura(e.target.value)} type="number" placeholder="sua altura em Mts" />
                <input className={styles.input}  onChange={e => setPeso(e.target.value)} type="number" placeholder="seu peso em Kg" />
                <button onClick={clicou} className="btn btn-success">Calcular</button>
            </form>
            {filtraResultado()}
        </div>
    )
}

export default Main
