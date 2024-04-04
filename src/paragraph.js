

function Paragraph ({ theme }) {

    console.log('theme: ', theme);
    return  (
        <p className={theme}>
            Đây là code 
        </p>
    )
}
export default Paragraph