export default class Global {
  static sharedInstance =
    this.sharedInstance == null ? new Global() : this.sharedInstance;

  AccessToken = "";
}
