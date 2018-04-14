const dnaToRna = (dna) => {
  let rna = '';
  for (let i = 0; i < length(dna); i += 1) {
    switch (dna[i]) {
      case 'G':
        rna = `${rna}C`;
        break;
      case 'C':
        rna = `${rna}G`;
        break;
      case 'T':
        rna = `${rna}A`;
        break;
      case 'A':
        rna = `${rna}U`;
        break;
      default:
        return null;
    }
  }
  return rna;
};
