export class Format {
  static splitSentenceByHashTag(sentence: string) {
    // Expresión regular para identificar palabras que comienzan con @ o #
    const regex = /(@\w+|#\w+)|([^@\s#]+|[.,!?])/g;
    const matches = sentence.match(regex);

    return matches || [];
  }
}
