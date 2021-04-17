import { doStuff } from "../../lib"

export default function CrashingApiRoute ({ name }) {
  return (
    <div>
      {name}
    </div>
  )
}

export const getStaticPaths = async function () {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps () {
  return {
    props: doStuff()
  }
}
