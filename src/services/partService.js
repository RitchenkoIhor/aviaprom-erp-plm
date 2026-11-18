class PartService {
  constructor(parts = []) {
    this.parts = parts;
  }

  validatePartStatus(part) {
    if (!part.cadRevisionApproved) throw new Error('CAD not approved');
    return true;
  }
}
module.exports = { PartService };
