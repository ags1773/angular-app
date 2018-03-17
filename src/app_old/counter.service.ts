export class CounterService {
  ctr: number[] = [0,0];

  activeToInactive(){
    this.ctr[0]++;
    return this.ctr[0];
  }
  inactiveToActive(){
    this.ctr[1]++;
    return this.ctr[1];
  }
}
