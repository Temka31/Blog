


const styles = {
    root: {
     width :"33%",
     border: "solid",
     margin: "1px",
     height: "70px",
    },
}

export default function Knopka(props) {
return(
<button style={styles.root} onClick={props.calc}>
{props.number}
</button>

)

}