$.fn.waterfallChart = function(chartConfig) {
        var element = $(this);
        var width = element.css("width").substring(0, 3);
        var theme = $.columnChartTheme(chartConfig);
        var chartOptions = theme.defaults;
        var seriesOptions = [];
        $.each(chartConfig.series,
        function(i, v) {
            seriesOptions.push({
                cursor: 'default',
                name: chartConfig.series[i].name,
                data: chartConfig.series[i].data,
                states: {
                    hover: {
                        enabled: true,
                        brightness: 0.1
                    }
                }
            });
            var barCount = chartConfig.series[i].data.length;
            for (var counter=0; counter < barCount-1; counter++) {
                yPoint = chartConfig.series[i].data[counter].y;
                seriesOptions.push($.helper.lineConnector([[counter+.1, yPoint], [counter+0.9, yPoint]]));
              }
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
                    stacking: null,
                    dataLabels: {
                        color: $.chartDefaults.black,
                        align: 'center'
                    }
                }
            },
            series: seriesOptions,
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