import styles from './arrow-vector.module.css'

const ArrowVector = () =>{
    return(
        <div className={styles.arrow_vector_container}>
            <svg className={styles.arrow_vector} viewBox="0 0 464 465" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M464 0H93.5V101.5H291.5L0 393L71.5 464.5L363.5 172.5V388.5H464V0Z" fill="#D6F379"/>
            </svg>
        </div>
    )
}

export default ArrowVector;