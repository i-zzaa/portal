export interface ServicesProps {
  title: string;
  description: string;
}

export interface CatalogProps {
  icon: string;
  title: string;
  description: string;
}

export interface SolicitacaoProps {
  idCatalog: number;
  idService: number;
  assunto: string;
  detahes: string;
  destinatario: string;
  telefone?: string;
  ramal?: string;
  ip: string;
  patrimonio?: string;
}
