export const getUniqueFilter = (films, property) => {
    const unique = films?.rows
    .reduce(
      (acc, row) =>
        acc.concat(
          row[property].map(item => ({ nameRu: item.nameRu, id: item.id }))
        ),
      []
    )
    .filter(
      (value, index, self) =>
        index === self.findIndex(t => t.nameRu === value.nameRu)
    );

  return unique;

}

