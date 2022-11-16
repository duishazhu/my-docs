interface BasicColumns { 
  title: string,
  subTitle: string,
  value: number | string,
}

interface YesterdayColumns { 
  text: string,
  value: number | string
}

export interface StatisticColumns {
  basicData: BasicColumns[],
  YesterdayData: YesterdayColumns[]
}