$.fn.columnChart = function(chartConfig) {
        var element = $(this);
        var width = element.css("width").substring(0, 3);
        var theme = $.columnChartTheme(chartConfig);
        var chartOptions = theme.defaults;
        var plotLinesOptions = [];
        var columnWidth = Math.min(theme.maxColumnWidth, ((element.width() / chartConfig.categories.length) - 10));
        plotLinesOptions.push({
            color: 'grey',
            width: 1,
            value: 0,
            label: {
                text: '',
                align: 'left',
                style: {
                    color: 'Gray'
                },
                x: -10,
                y: 5
            },
            zIndex: 5
        });
        jQuery.extend(true, chartOptions, {
            chart: {
                renderTo: element.attr("id"),
                marginTop: 35,
                spacingBottom: 30
            },
            tooltip: {
                backgroundColor: theme.white,
                shadow: false,
                useHTML: true
            },
            xAxis: {
                categories: chartConfig.categories
            },
            plotOptions: {
                column: {
                    pointWidth: columnWidth,
                    stacking: null,
                    dataLabels: {
                        color: $.chartDefaults.black,
                        align: 'center'
                    }
                }
            },
            legend: {
                enabled: false
            },
            labels: {
                style: {
                    color: theme.labelColor
                }
            }
        });

        return new Highcharts.Chart(chartOptions);
};
