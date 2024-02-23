export interface PersistanceService {
  saveGraph(graph: StructuredGraphDTO): Promise<void>;
  saveNode(node: ConceptGraphNodeDTO): Promise<void>;
  getGraph(graphId: number): Promise<StructuredGraphDTO | null>;
  getNode(nodeId: number): Promise<ConceptGraphNodeDTO | null>;
  createGraph(graph: NewGraphDTO): Promise<void>;
  removeGraph(graphId: number): Promise<void>
}

export type StructuredGraphDTOParts = {[key: string]: ConceptGraphNodeDTO[]};

export interface StructuredGraphDTO {
  id?: number;
  name?: string;
  parts?: StructuredGraphDTOParts;
}

export interface NewGraphDTO {
  name?: string;
  partNumber?: number;
}

export interface ConceptGraphNodeDTO {
  content?: string;
  graphId?: number;
  id?: number;
  name?: string;
  partIndex?: number;
}