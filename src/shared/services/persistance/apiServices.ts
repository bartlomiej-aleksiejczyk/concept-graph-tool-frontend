
import { NewGraphDTO, PersistanceService } from "./PersistanceService";

export class ApiService implements PersistanceService {
  createGraph(graph: NewGraphDTO): Promise<void> {
    // TBD
  }
  removeGraph(graphId: number): Promise<void> {
    // TBD
  }
  async saveGraph(graph: StructuredGraphDTO): Promise<void> {
    // TBD
  }

  async saveNode(node: ConceptGraphNodeDTO): Promise<void> {
    // TBD
  }

  async getGraph(graphId: number): Promise<StructuredGraphDTO | null> {
    // TBD
    return null;
  }

  async getNode(nodeId: number): Promise<ConceptGraphNodeDTO | null> {
    // TBD
    return null;
  }
}