// document.addEventListener("DOMContentLoaded", function() {
//     var lineChartCtx = document.getElementById("lineChart").getContext("2d");
//     var barChartCtx = document.getElementById("barChart").getContext("2d");
//     var pieChartCtx = document.getElementById("pieChart").getContext("2d");
//     var lineChartLowerCtx = document.getElementById("lineChartLower").getContext("2d");
//     var barChartLowerCtx = document.getElementById("barChartLower").getContext("2d");
//     var pieChartLowerCtx = document.getElementById("pieChartLower").getContext("2d");

//     var lineChartData = {
//         labels: ["jan", "feb", "mar", "apr", "may" ,"jun","jul","aug","sep","oct","nov","dec"],
//         datasets: [
//             {
//                 label: "Sample Line Chart",
//                 data: [200, 250, 300, 150, 180],
//                 borderColor: "rgba(75, 192, 192, 1)",
//                 borderWidth: 2,
//                 fill: false,
//             },
//         ],
//     };

//     var barChartData = {
//         labels: ["Category 1", "Category 2", "Category 3"],
//         datasets: [
//             {
//                 label: "Sample Bar Chart",
//                 data: [10, 20, 30],
//                 backgroundColor: ["rgba(75, 192, 192, 0.5)", "rgba(255, 206, 86, 0.5)", "rgba(54, 162, 235, 0.5)"],
//                 borderWidth: 1,
//             },
//         ],
//     };

//     var pieChartData = {
//         labels: ["Category A", "Category B", "Category C"],
//         datasets: [
//             {
//                 data: [30, 40, 30],
//                 backgroundColor: ["rgba(75, 192, 192, 0.5)", "rgba(255, 206, 86, 0.5)", "rgba(54, 162, 235, 0.5)"],
//             },
//         ],
//     };

//     var chartOptions = {
//         scales: {
//             y: {
//                 beginAtZero: true,
//                 ticks: {
//                     color: 'red' // Change the color of the y-axis labels to red
//                 }
//             },
//             x: {
//                 ticks: {
//                     color: 'red' // Change the color of the x-axis labels to red
//                 }
//             }
//         },
//         plugins: {
//             legend: {
//                 labels: {
//                     color: 'red' // Change the color of the legend labels to red
//                 }
//             },
//             title: {
//                 display: true,
//                 text: 'Chart Title',
//                 color: 'red' // Change the color of the chart title to red
//             }
//         }
//     };

//     var lineChart = new Chart(lineChartCtx, {
//         type: "line",
//         data: lineChartData,
//         options: chartOptions
//     });

//     var barChart = new Chart(barChartCtx, {
//         type: "bar",
//         data: barChartData,
//         options: chartOptions
//     });

//     var pieChart = new Chart(pieChartCtx, {
//         type: "pie",
//         data: pieChartData,
//         options: chartOptions
//     });

//     var lineChartLower = new Chart(lineChartLowerCtx, {
//         type: "line",
//         data: lineChartData,
//         options: chartOptions
//     });

//     var barChartLower = new Chart(barChartLowerCtx, {
//         type: "bar",
//         data: barChartData,
//         options: chartOptions
//     });

//     var pieChartLower = new Chart(pieChartLowerCtx, {
//         type: "pie",
//         data: pieChartData,
//         options: chartOptions
//     });
// });
// document.addEventListener("DOMContentLoaded", function() {
//     var lineChartCtx = document.getElementById("lineChart").getContext("2d");
//     var barChartCtx = document.getElementById("barChart").getContext("2d");
//     var pieChartCtx = document.getElementById("pieChart").getContext("2d");
//     var lineChartLowerCtx = document.getElementById("lineChartLower").getContext("2d");
//     var barChartLowerCtx = document.getElementById("barChartLower").getContext("2d");
//     var pieChartLowerCtx = document.getElementById("pieChartLower").getContext("2d");

//     // Helper function to generate random numbers within a specified range
//     function getRandomData(min, max, length) {
//         var data = [];
//         for (var i = 0; i < length; i++) {
//             data.push(Math.floor(Math.random() * (max - min + 1)) + min);
//         }
//         return data;
//     }

//     // Helper function to generate random values for the pie chart data
//     function getRandomPieData(length) {
//         var data = [];
//         var total = 100; // Total percentage for the pie chart should add up to 100
//         for (var i = 0; i < length - 1; i++) {
//             data.push(Math.floor(Math.random() * total));
//             total -= data[i];
//         }
//         data.push(total); // Ensure the total sums up to 100
//         return data;
//     }

//     // Generate random data for the charts
//     var lineChartData = {
//         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//         datasets: [
//             {
//                 label: "Sample Line Chart",
//                 data: getRandomData(100, 500, 12), // Random data for the line chart
//                 borderColor: "rgba(75, 192, 192, 1)",
//                 borderWidth: 2,
//                 fill: false,
//             },
//         ],
//     };

//     var barChartData = {
//         labels: ["Category 1", "Category 2", "Category 3"],
//         datasets: [
//             {
//                 label: "Sample Bar Chart",
//                 data: getRandomData(5, 50, 3), // Random data for the bar chart
//                 backgroundColor: [
//                     "rgba(75, 192, 192, 0.5)",
//                     "rgba(255, 206, 86, 0.5)",
//                     "rgba(54, 162, 235, 0.5)",
//                 ],
//                 borderWidth: 1,
//             },
//         ],
//     };

//     var pieChartData = {
//         labels: ["Category A", "Category B", "Category C"],
//         datasets: [
//             {
//                 data: getRandomPieData(3), // Random data for the pie chart
//                 backgroundColor: [
//                     "rgba(75, 192, 192, 0.5)",
//                     "rgba(255, 206, 86, 0.5)",
//                     "rgba(54, 162, 235, 0.5)",
//                 ],
//             },
//         ],
//     };

//     var chartOptions = {
//         scales: {
//             y: {
//                 beginAtZero: true,
//                 ticks: {
//                     color: 'red', // Change the color of the y-axis labels to red
//                 },
//             },
//             x: {
//                 ticks: {
//                     color: 'red', // Change the color of the x-axis labels to red
//                 },
//             },
//         },
//         plugins: {
//             legend: {
//                 labels: {
//                     color: 'red', // Change the color of the legend labels to red
//                 },
//             },
//             title: {
//                 display: true,
//                 text: 'Chart Title',
//                 color: 'red', // Change the color of the chart title to red
//             },
//         },
//     };

//     // Create the charts using random data
//     var lineChart = new Chart(lineChartCtx, {
//         type: "line",
//         data: lineChartData,
//         options: chartOptions,
//     });

//     var barChart = new Chart(barChartCtx, {
//         type: "bar",
//         data: barChartData,
//         options: chartOptions,
//     });

//     var pieChart = new Chart(pieChartCtx, {
//         type: "pie",
//         data: pieChartData,
//         options: chartOptions,
//     });

//     // Generate and display random data for lower charts
//     var lineChartLower = new Chart(lineChartLowerCtx, {
//         type: "line",
//         data: lineChartData,
//         options: chartOptions,
//     });

//     var barChartLower = new Chart(barChartLowerCtx, {
//         type: "bar",
//         data: barChartData,
//         options: chartOptions,
//     });

//     var pieChartLower = new Chart(pieChartLowerCtx, {
//         type: "pie",
//         data: pieChartData,
//         options: chartOptions,
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));

    // Check if user data exists
    if (userData) {
        const userInfoDiv = document.getElementById("userInfo");
        userInfoDiv.innerHTML = `
            <p><b>Name:</b> ${userData.name}</p>
            <p><b>Email:</b> ${userData.email}</p>
            <p><b>Password:</b> ${userData.password}</p>
            <p><b>Address:</b> ${userData.address}</p>
            <p><b>Mobile Number:</b> ${userData.mobile}</p>
        `;
    } else {
        alert("No user data found! Please sign up first.");
    }

    // Chart initialization logic
    var lineChartCtx = document.getElementById("lineChart").getContext("2d");
    var barChartCtx = document.getElementById("barChart").getContext("2d");
    var pieChartCtx = document.getElementById("pieChart").getContext("2d");
    var lineChartLowerCtx = document.getElementById("lineChartLower").getContext("2d");
    var barChartLowerCtx = document.getElementById("barChartLower").getContext("2d");
    var pieChartLowerCtx = document.getElementById("pieChartLower").getContext("2d");

    function getRandomData(min, max, length) {
        var data = [];
        for (var i = 0; i < length; i++) {
            data.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        return data;
    }

    function getRandomPieData(length) {
        var data = [];
        var total = 100;
        for (var i = 0; i < length - 1; i++) {
            data.push(Math.floor(Math.random() * total));
            total -= data[i];
        }
        data.push(total);
        return data;
    }

    var lineChartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Sample Line Chart",
                data: getRandomData(100, 500, 12),
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 2,
                fill: false,
            },
        ],
    };

    var barChartData = {
        labels: ["Category 1", "Category 2", "Category 3"],
        datasets: [
            {
                label: "Sample Bar Chart",
                data: getRandomData(5, 50, 3),
                backgroundColor: [
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                ],
                borderWidth: 1,
            },
        ],
    };

    var pieChartData = {
        labels: ["Category A", "Category B", "Category C"],
        datasets: [
            {
                data: getRandomPieData(3),
                backgroundColor: [
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                ],
            },
        ],
    };

    var chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: { color: "red" },
            },
            x: { ticks: { color: "red" } },
        },
        plugins: {
            legend: { labels: { color: "red" } },
            title: {
                display: true,
                text: "Chart Title",
                color: "red",
            },
        },
    };

    var lineChart = new Chart(lineChartCtx, {
        type: "line",
        data: lineChartData,
        options: chartOptions,
    });

    var barChart = new Chart(barChartCtx, {
        type: "bar",
        data: barChartData,
        options: chartOptions,
    });

    var pieChart = new Chart(pieChartCtx, {
        type: "pie",
        data: pieChartData,
        options: chartOptions,
    });

    var lineChartLower = new Chart(lineChartLowerCtx, {
        type: "line",
        data: lineChartData,
        options: chartOptions,
    });

    var barChartLower = new Chart(barChartLowerCtx, {
        type: "bar",
        data: barChartData,
        options: chartOptions,
    });

    var pieChartLower = new Chart(pieChartLowerCtx, {
        type: "pie",
        data: pieChartData,
        options: chartOptions,
    });
});