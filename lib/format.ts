export class Format {
  static splitSentenceByHashTag(sentence: string) {
    // Expresión regular para identificar palabras que comienzan con @ o #
    // y también capturar saltos de línea (\n)
    const regex = /(@\w+|#\w+)|([^@\s#]+|[.,!?])|(\n)/g;
    const matches = sentence.match(regex);

    return matches || [];
  }

  static timeAgo(date: Date, daysLimit: number = 7): string {
    const MS_IN_MINUTE = 1000 * 60;
    const MS_IN_HOUR = MS_IN_MINUTE * 60;
    const MS_IN_DAY = MS_IN_HOUR * 24;

    const now = new Date();
    const diffInMilliseconds = now.getTime() - date.getTime();

    // Convertir la diferencia a minutos, horas y días
    const minutesElapsed = Math.floor(diffInMilliseconds / MS_IN_MINUTE);
    const hoursElapsed = Math.floor(diffInMilliseconds / MS_IN_HOUR);
    const daysElapsed = Math.floor(diffInMilliseconds / MS_IN_DAY);

    if (minutesElapsed < 1) {
      return `ahora`;
    } else if (minutesElapsed < 60) {
      return `${minutesElapsed} ${minutesElapsed === 1 ? "minuto" : "minutos"}`;
    } else if (hoursElapsed <= 24) {
      return `${hoursElapsed} horas`;
    } else if (daysElapsed <= daysLimit) {
      return `${daysElapsed} ${daysElapsed === 1 ? "día" : "días"}`;
    } else {
      // Formatear la fecha en dd/mm/yyyy
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
  }

  static numberReactions(reactions: number): string {
    if (reactions === 0) return "";
    else if (reactions < 1000) {
      return reactions.toString();
    } else if (reactions < 1000000) {
      return (reactions / 1000).toFixed(1).replace(".0", "") + "Mil";
    } else {
      return (reactions / 1000000).toFixed(1).replace(".0", "") + "MM";
    }
  }
}
