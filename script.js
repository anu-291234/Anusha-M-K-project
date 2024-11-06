// Creating the bar chart for Activity
const activityCtx = document.getElementById('activityChart').getContext('2d');
const activityChart = new Chart(activityCtx, {
    type: 'bar',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'New Visitors',
                data: [70, 180, 300, 200],
                backgroundColor: 'rgba(54, 162, 235, 0.6)', // Light blue for New Visitors
                borderRadius: 100, // Slightly rounded corners
                borderWidth: 1,
                borderColor: 'rgba(54, 162, 235, 1)', // Darker blue border for contrast
                categoryPercentage: 0.6, // Wider bar groups
                barPercentage: 0.8
            },
            {
                label: 'Returning Visitors',
                data: [100, 390, 200, 150],
                backgroundColor: 'rgba(255, 206, 86, 0.6)', // Warm yellow for Returning Visitors
                borderRadius: 100, // Slightly rounded corners
                borderWidth: 1,
                borderColor: 'rgba(255, 206, 86, 1)', // Darker yellow border for contrast
                categoryPercentage: 0.6, // Wider bar groups
                barPercentage: 0.8
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(150, 150, 150, 0.1)', // Subtle grid line color
                },
                ticks: {
                    stepSize: 50,
                    color: '#333', // Darker tick color
                }
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#333' // Darker x-axis labels
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#555', // Darker legend color
                    font: {
                        style: 'italic', // Italicize the legend labels
                    },
                    usePointStyle: true,
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background for tooltips
                titleColor: '#fff', // White title text
                bodyColor: '#ddd' // Lighter tooltip body text
            }
        }
    }
});
// Creating the doughnut chart for Product
const ctx = document.getElementById('productChart').getContext('2d');
const productChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
        datasets: [{
            data: [55, 31, 14],
            backgroundColor: ['#8A2BE2', '#FFA500', '#4682B4'], // Purple, orange, and steel blue colors
            hoverBackgroundColor: ['#6F1FB2', '#D48200', '#365879'], // Darker colors on hover
            borderWidth: 3,
            borderColor: '#ffffff', // White borders for a clean separation
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%', // Adjusted donut hole size for a thicker look
        plugins: {
            legend: {
                display: true,
                position: 'right', // Position the legend on the right
                labels: {
                    color: '#333', // Darker text for labels
                    padding: 20, // Extra padding between legend items
                    font: {
                        size: 14,
                        weight: 'bold'
                    },
                    boxWidth: 12, // Smaller color box next to each label
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background for tooltips
                titleColor: '#fff',
                bodyColor: '#ccc',
                padding: 10,
                cornerRadius: 8, // Rounded tooltip corners
            }
        }
    }
});


function openModal() {
    document.getElementById('addProfileModal').style.display = 'block';
    openTab(null, 'basic'); // Reset to the first tab on open
    document.getElementById('next-done-button').innerText = 'Next'; // Set button to "Next" on open
}

function closeModal() {
    document.getElementById('addProfileModal').style.display = 'none';
}

function openTab(evt, tabName) {
    var i, tabcontent, tabbuttons;
    
    // Hide all tab contents
    tabcontent = document.getElementsByClassName('tab-content');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('active');
    }

    // Remove the active class from all tab buttons
    tabbuttons = document.getElementsByClassName('tab-button');
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove('active');
    }

    // Show the current tab and add an "active" class to the button that opened it
    document.getElementById(tabName).classList.add('active');
    if (evt) {
        evt.currentTarget.classList.add('active');
    }

    // Change the button text based on the tab
    if (tabName === 'basic') {
        document.getElementById('next-done-button').innerText = 'Next';
    } else if (tabName === 'social') {
        document.getElementById('next-done-button').innerText = 'Done';
    }
}

function nextOrDone() {
    // Check if the current tab is Basic, then navigate to Social
    if (document.getElementById('basic').classList.contains('active')) {
        openTab(null, 'social'); // Switch to the Social tab
    } else {
        closeModal(); // Close the modal when "Done" is clicked on the Social tab
    }
}
