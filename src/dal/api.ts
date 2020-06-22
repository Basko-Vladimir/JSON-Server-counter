import axios from 'axios';

const instance = axios.create({
   baseURL: process.env.REACT_APP_API_BASE_URL
});

console.log(process.env.REACT_APP_API_BASE_URL);

type CounterType = {
   value: number
}

type CounterSettingsType = {
   maxValue: number
   startValue: number
}

export const counterAPI = {
   getCounter() {
      return instance.get<CounterType>('/counter')
          .then(res => res.data)
   },
   updateCounter(newValue: number){
      return instance.put('/counter', {value: newValue})
   },


   getCounterSettings() {
      return instance.get<CounterSettingsType>('/counter-settings')
          .then(res => res.data)
   },
   updateMaxValue(newMaxValue: number) {
      return instance.patch('/counter-settings', {maxValue: newMaxValue})
   },
   updateStartValue(newStartValue: number) {
      return instance.patch('/counter-settings', {startValue: newStartValue})
   }
};


// @ts-ignore
window.api = counterAPI;