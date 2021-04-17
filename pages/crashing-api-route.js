import { doStuff } from "../lib"

export default function CrashingApiRoute ({ name }) {
  return (
    <div>
      {name}
    </div>
  )
}

export async function getStaticProps () {
  return {
    props: doStuff()
  }
}
