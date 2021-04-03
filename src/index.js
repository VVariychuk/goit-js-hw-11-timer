import './styles.css';

class CountdownTimer {

  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector(`${this.selector} [data-value="days"]`),
      hours: document.querySelector(`${this.selector} [data-value="hours"]`),
      mins: document.querySelector(`${this.selector} [data-value="mins"]`),
      secs: document.querySelector(`${this.selector} [data-value="secs"]`),
    };
    this.getTimeToTarget()
    this.setTimeToTarget()
    }
  getTimeToTarget() {
    setInterval(() => {    
      const currentTime = Date.now()
      
      const time = this.targetDate - currentTime
      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)))
      const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000))
      
      this.setTimeToTarget(days, hours, mins, secs)
    }, 1000);
  }
  setTimeToTarget(days, hours, mins, secs) {
      this.refs.days.textContent = days
      this.refs.hours.textContent = hours
      this.refs.mins.textContent = mins
      this.refs.secs.textContent = secs
   }

}

function pad(value) {
  return String(value).padStart(2, '0')
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 02, 2021'),
})
