$.fn.lineChart = function(chartConfig) {
    return $.hh.initChart(this, chartConfig,
    function(chartConfig) {
        var element = $(this);
        var width = element.css("width").substring(0, 3);
        var theme = $.lineChartTheme(chartConfig);
        var chartOptions = theme.defaults;
        var seriesOptions = [];
        var seriesColors = $.hh.seriesColorsFor(theme, chartConfig.series.length);
        $.each(chartConfig.series,
        function(i, v) {
            seriesOptions.push({
                borderColor: theme.black,
                name: chartConfig.series[i].name,
                data: chartConfig.series[i].data,
                color: seriesColors.fills[i],
                shadow: true,
                states: {
                    hover: {
                        enabled: true,
                        brightness: 0.1
                    }
                }
            });
        });

        jQuery.extend(true, chartOptions, {
            chart: {
                renderTo: element.attr("id"),
                spacingBottom: 30
            },
            xAxis: {
                categories: chartConfig.categories
            },
            yAxis: {
                opposite: false,
                min: chartConfig.min,
                max: chartConfig.max
            },
            tooltip: {
                backgroundColor: $.chartDefaults.white,
                shadow: false,
                useHTML: true,
                formatter: function() {
                    return $.hh.nf(this.y, chartConfig.metric_unit);
                }
            },
            series: seriesOptions
        });
        return new Highcharts.Chart(chartOptions,
        function(chart) {
            $.hh.plugins.annotations(chart, {
                url: $("#" + chart.options.chart.renderTo).attr('data-annotations-url')
            });
        });
    });
};