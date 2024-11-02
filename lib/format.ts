export class Format {
  static splitSentenceByHashTag(sentence: string) {
    // Expresión regular para identificar palabras que comienzan con @ o #
    // y también capturar saltos de línea (\n)
    const regex = /(@\w+|#\w+)|([^@\s#]+|[.,!?])|(\n)/g;
    const matches = sentence.match(regex);

    return matches || [];
  }
}
