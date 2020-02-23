import Layout from "../components/MyLayout";
import Knopka from "../components/knopka";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%"
  }
};
export default function About() {
  return (
    <Layout>
      <div style={styles.root}>
        <Knopka number={"1"} />
        <Knopka number={"2"} />
        <Knopka number={"3"} />
        <Knopka number={"4"} />
        <Knopka number={"5"} />
        <Knopka number={"6"} />
        <Knopka number={"7"} />
        <Knopka number={"8"} />
        <Knopka number={"9"} />
        <Knopka number={"0"} />
        <Knopka number={"="} />
        <Knopka number={"C"} />
      </div>
    </Layout>
  );
}
