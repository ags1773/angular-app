export class LoggingService {
  logStatusChange(accountStatus){
    console.log("Server status changed. New status --> " + accountStatus);
  }
}
