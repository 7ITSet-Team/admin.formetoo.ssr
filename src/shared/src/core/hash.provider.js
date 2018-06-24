import sha256 from 'js-sha256'

export default class Hash {
  static getHash(text) {
    const salt = '#!f$55723e.12d68,,b36fdcCC0ba7cf^%^d8f8e1c1793453_32'
    return sha256(salt + text)
  }
}
