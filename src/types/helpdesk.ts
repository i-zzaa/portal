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
  codCatalog: string;
  codCategory: string;
  codService: string;
  assunto: string;
  detahes: string;
  destinatario: string;
  telefone?: string;
  ramal?: string;
  ip: string;
  patrimonio?: string;
  file: File;
}
