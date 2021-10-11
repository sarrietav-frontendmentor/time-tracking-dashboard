interface Timeframe {
  current: number
  previous: number
}

export interface Timeframes {
  daily: Timeframe
  weekly: Timeframe
  monthly: Timeframe
}

export interface Task {
  title: string
  timeframes: Timeframes
}
