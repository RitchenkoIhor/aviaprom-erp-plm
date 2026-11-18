class PartService {
  constructor(parts = []) {
    this.parts = parts;
  }

  validatePartStatus(part) {
    // CAD check in main
    if (!part.cadRevisionApproved) throw new Error('CAD not approved');
    return true;
  }
}
module.exports = { PartService };
