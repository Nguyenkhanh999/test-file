import styles from'./Paragraph.module.css'

console.log(styles);

function Paragraph() {
    return (
        <h1 className={styles.paragraph}>  
        Chào mi
        </h1>
    )
}
export default Paragraph