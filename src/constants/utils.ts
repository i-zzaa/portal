export enum STATUS {
  encerrado = "Encerrado",
  reaberto = "Reaberto",
  novo = "Novo",
  resolvido = "Resolvido",
}

export const getIconColor = (item: any, type: "color" | "icon") => {
  switch (item.status) {
    case STATUS.reaberto:
      item.color = "orange";
      item.icon = "PhArrowsClockwise";
      break;
    case STATUS.encerrado:
      item.color = "blue";
      item.icon = "PhCheck";
      break;
    case STATUS.resolvido:
      item.color = "green";
      item.icon = "PhCheck";
      break;
    case STATUS.novo:
      item.color = "blue";
      item.icon = "PhTicket";
      break;
    default:
      break;
  }

  return item[type];
};
