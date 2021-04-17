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
    paths: ['/crashes/987'],
    fallback: true
  }
}

export async function getStaticProps () {
  return {
    props: doStuff()
  }
}
