async function getData() {
    const response = await fetch("MilitarySpending.csv");
    const data = await response.text();
    return data;
}


getData()
.then((text) => {
    const rows = text.split("\n").slice(1);
    const year = [];
    const spending = [];
    const gdp = [];
    rows.forEach((elem) => {
        const row = elem.split(",")
        console.log(row[0]);
        console.log(row[1]);
        year.push(row[0]);
        spending.push(parseFloat(row[1]));
        gdp.push(parseFloat(row[2]))
    })
    const military = document.getElementById('ChartSpending');
    new Chart(military, {
        type: 'line',
        data: {
          labels: year,
          datasets: [{
            label: 'US Military Spending by Year, Billions USD',
            data: spending,
            backgroundColor:"rgba(235, 34, 61)",
            borderColor: "rgba(235, 34, 61, 0.5)",
            borderWidth: 2
          }]
        },
        options: {
          scales: {
            y: {
                min: 0
            }
          },
          responsive: false
        }
      }    
    );
    const chartGDP = document.getElementById('ChartGDP');

    new Chart(chartGDP, {
      type: 'line',
      data: {
        labels: year,
        datasets: [{
          label: 'US GDP by Year, Billions USD',
          data: gdp,
          backgroundColor:"rgba(21, 94, 37)",
          borderColor: "rgba(21, 94, 37, 0.5)",
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
              min: 0
          }
        },
        responsive: false
      },
    
  });
})
