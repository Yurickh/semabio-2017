export default class GraphQL {
  static read(graph) {
    if (Array.isArray(graph)) {
      return new GraphQL(graph)
    }

    const { type } = graph

    if (type && type.kind === 'SCALAR') {
      return graph.value
    }

    return new GraphQL(graph)
  }

  constructor(graph) {
    this.graph = graph
  }

  get(property) {
    return GraphQL.read(this.graph.attrs[property])
  }

  map(cb) {
    return this.graph
      .map(node => GraphQL.read(node))
      .map(cb)
  }
}
