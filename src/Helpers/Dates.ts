export default class Dates {
  static getTime(date: string) {
    return new Date(Number(date)).getTime();
  }
  static parseDate(date: string) {
    return String(new Date(date).getTime());
  }
  static showDate(date: string) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Date(Number(date)).toLocaleDateString("en-US", options);
  }
}
