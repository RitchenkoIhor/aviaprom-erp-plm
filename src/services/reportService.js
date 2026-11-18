function generateAssemblyReadinessPdfPayload(assemblyId, parts) {
  const filtered = parts.filter((p) => p.assemblyId === assemblyId);
  const ready = filtered.filter((p) => p.cadRevisionApproved && p.certValid && p.inStock).length;
  return {
    format: 'PDF',
    assemblyId,
    totalParts: filtered.length,
    readyParts: ready,
    readinessPercent: filtered.length ? Math.round((ready / filtered.length) * 100) : 0
  };
}
module.exports = { generateAssemblyReadinessPdfPayload };
