export default class Dates {
  static getTime(date) {
    return new Date(Number(date)).getTime();
  }
  static parseDate(date) {
    return String(new Date(date).getTime());
  }
}
