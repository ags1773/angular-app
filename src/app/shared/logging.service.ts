export class LoggingService {

  constructor(private accountStatus: string) { }

  logStatusChange(){
    console.log("Server status changed. New status --> " + this.accountStatus);
  }
}
