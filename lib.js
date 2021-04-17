import { Jsonix } from 'jsonix'

export function doStuff () {
  const context = new Jsonix.Context([])
  const unmarshaller = context.createUnmarshaller()

  return { name: 'John Doe' }
}
