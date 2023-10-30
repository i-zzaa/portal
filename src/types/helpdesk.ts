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
  subject: string;
  detail: string;
  recipient: string;
  telephone?: string;
  extension?: string;
  ip: string;
  patrimony?: string;
  filename?: string;
  file: File;
}

export interface SolicitacaoReplyProps {
  subject: string;
  detail: string;
  recipient: string;
  filename?: string;
  file: File;
}
