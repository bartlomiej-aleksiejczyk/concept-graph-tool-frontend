import { ConceptGraphNodeDTO, PersistanceService, NewGraphDTO, StructuredGraphDTO } from "./PersistanceService";

export class LocalStorageService implements PersistanceService {
    async createGraph(graph: NewGraphDTO): Promise<void> {
    const lastId = parseInt(localStorage.getItem('lastGraphId') || '0', 10);
    const newId = lastId + 1;
    localStorage.setItem('lastGraphId', newId.toString());

    const newGraph = { ...graph, id: newId };
    localStorage.setItem(`graph-${newId}`, JSON.stringify(newGraph));
  }
  async removeGraph(graphId: number): Promise<void> {
    localStorage.removeItem(`graph-${graphId}`);
  }
  async saveGraph(graph: StructuredGraphDTO): Promise<void> {
    localStorage.setItem(`graph-${graph.id}`, JSON.stringify(graph));
  }

  async saveNode(node: ConceptGraphNodeDTO): Promise<void> {
    localStorage.setItem(`node-${node.id}`, JSON.stringify(node));
  }

  async getGraph(graphId: number): Promise<StructuredGraphDTO | null> {
    const graph = localStorage.getItem(`graph-${graphId}`);
    return graph ? JSON.parse(graph) : null;
  }

  async getNode(nodeId: number): Promise<ConceptGraphNodeDTO | null> {
    const node = localStorage.getItem(`node-${nodeId}`);
    return node ? JSON.parse(node) : null;
  }
}
