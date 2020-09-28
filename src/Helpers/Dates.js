export default class Dates {
  static getTime(date) {
    return new Date(Number(date)).getTime();
  }
}
