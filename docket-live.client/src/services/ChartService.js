import Chart from 'chart.js/auto'
import { logger } from "../utils/Logger"

let chart = null

let barColors = ['#86E29B', '#3BA5DC', '#fbcf33', '#ea0606']
let chartData = {
  labels: [],
  datasets:[{
    labels: [],
    data: [],
    backgroundColor:barColors
  }]
}




function footer(){
  return ''
}
class ChartService{
  convertToChart(raw){
    logger.log('converting',raw)
    chartData.question = raw.question
    let dict = {}
    // building bars
    raw.question.choices.forEach(c => {
      dict[c.content] = []
      })
    raw.answers.forEach(a => {
      dict[a.answer.content].push(a)
    })
    logger.log(dict)

    Object.keys(dict).forEach((key, i) =>{
      chartData.labels.push(key)
      chartData.datasets[0].data.push(dict[key].length)

    })
    logger.log(chartData)

  }

  drawChart(ctx,raw){
    this.convertToChart(raw)
    if(chart) chart.destroy()
    this.configureChartDefaults()
    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        ...chartData
            },
            options: {
              scales: {
            x: {
              stacked: true,
              ticks: { callback: function(value, index, values) {
                let label = this.getLabelForValue(value)
                return label.length > 30 ? label.slice(0,30)+ '..': label
              }}
            },
            y: {
              stacked: false,
              beginAtZero: true
            }
          },
          plugins:{
            legend: { display: false},
            tooltip: {
              callbacks: {
                footer: footer
              },
              labels: {
                    font: {
                        size: 14
                    }
                }
              },
              title: {
                display: true,
                text: `${chartData.question.body}?`,
                font:{
                  size: 24
                }
            }
          },
          interaction: {
            intersect: false,
            mode: 'index',
          },
        }
      });
    }


    configureChartDefaults(){
      Chart.defaults.font.size = 16
      Chart.defaults.color = '#000000'
      Chart.defaults.elements.bar.borderRadius = 8
    }




}


export const chartService = new ChartService()
