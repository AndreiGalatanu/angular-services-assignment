export class CounterService {


  setToInactiveCount = [];
  setToActiveCount = [];





  countToActive() {

    const count = this.setToActiveCount.length + 1;
    this.setToActiveCount.push(count)

    console.log('The count to active is ' + count)

  }

  countToInactive() {

    const count = this.setToInactiveCount.length + 1;
    this.setToInactiveCount.push(count)
    console.log('The count to inactive is ' + count)
  }


}
