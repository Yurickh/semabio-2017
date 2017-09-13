export default class GraphQLReader {
  constructor(graph) {
    if (graph.type && graph.type === 'SCALAR') {
      return graph.value
    }

    this.graph = graph
  }

  get(property) {
    return GraphQLReader(this.graph.attrs[property])
  }

  iterate() {
    return this.graph.map(node => GraphQLReader(node))
  }
}
