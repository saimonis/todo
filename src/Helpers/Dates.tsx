export default class Dates {
  static getTime(date: string) {
    return new Date(Number(date)).getTime();
  }
  static parseDate(date: string) {
    return String(new Date(date).getTime());
  }
}
