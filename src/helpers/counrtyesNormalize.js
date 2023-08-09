export const countriesNormalize = data => {
  return data
    .map(({ capital, flags: { png }, population, name: { common } }) => ({
      name: common,
      id: common,
      capital,
      population,
      flag: png,
    }))
    .filter(item => item.name !== 'Russia');
};
