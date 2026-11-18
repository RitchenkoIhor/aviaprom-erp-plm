class PartService {
  constructor(parts = []) {
    this.parts = parts;
  }

  validatePartStatus(part) {
    if (!part.rfidTag || !part.certValid) throw new Error('Invalid RFID/Cert');
    return true;
  }
}
module.exports = { PartService };
