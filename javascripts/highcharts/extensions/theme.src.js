$.chartDefaults = {
    white: '#FFFFFF',
    black: '#6B6B6B',
    labelColor: '#C1C1C1',
    lineColor: "#D3D8DD",
    style: {
        fontFamily: 'Arial, Helvetica, sans-serif, Verdana',
        fontSize: 11,
        marginLeft: '1px'
    }
};

Highcharts.setOptions({
    chart: {
        style: $.chartDefaults.style
    }
});

$.defaultTheme = function(chartConfig) {
    return {
        seriesDefaults: {
            borderRadius: 0,
            type: 'column',
            cursor: 'default'
        },
        defaults: jQuery.extend(true, {
            chart: {
                marginTop: 10,
                spacingTop: 0,
                style: $.chartDefaults.style
            },
            credits: {
                enabled: false
            },
            title: {
                text: ''
            },
            legend: {
                enabled: false
            },
            xAxis: {
                title: {
                    text: ''
                },
                gridLineColor: $.chartDefaults.white,
                lineColor: $.chartDefaults.lineColor,
                tickColor: $.chartDefaults.white,
                labels: {
                    enabled: true,
                    staggerLines: 2,
                    style: {
                        color: $.chartDefaults.labelColor
                    }
                },
                lineWidth: 1
            },
            yAxis: {
                title: {
                    text: ""
                },
                tickColor: $.chartDefaults.white,
                lineColor: $.chartDefaults.lineColor,
                gridLineColor: $.chartDefaults.white,
                endOnTick: true,
                showLastLabel: true,
                labels: {
                    enabled: false
                },
                opposite: true,
                lineWidth: 1
            },
            plotOptions: {
                series: {
                    animation: true
                }
            }
        },
        chartConfig)
    };
};

$.lineChartTheme = function(chartConfig) {
    return jQuery.extend(true, $.defaultTheme(chartConfig), {
        seriesColors: ["#D3D3D3"],
        seriesBorderColors: ["#C3C3C3"],
        defaults: {
            chart: {
                type: 'line'
            },
            plotOptions: {
                line: {
                    marker: {
                        fillColor: $.chartDefaults.black,
                        radius: 8,
                        lineWidth: 4,
                        lineColor: "#efefef"
                    }
                }
            },
            yAxis: {
                endOnTick: true,
                labels: {
                    enabled: true
                }
            }
        }
    });
};

$.columnChartTheme = function(chartConfig) {
    var splineFill = '#FF8000';
    var avgColor = '#D0D0D0';
    var avgtqColor = '#00DD00';
    var targetColor = "#3C91D3";
    var benchmarkColors = ['#D0D0D0', '#ffba00', '#00DD00'];
    var colors = ['#4379A7', '#0C5C8D', '#8FA9CC'];
    return jQuery.extend(true, $.defaultTheme(chartConfig), {
        maxColumnWidth: 80,
        seriesColors: colors,
        seriesBorderColors: colors,
        splineFill: splineFill,
        labelColor: $.chartDefaults.labelColor,
        white: $.chartDefaults.white,
        black: $.chartDefaults.black,
        avgColor: avgColor,
        avgtqColor: avgtqColor,
        benchmarkColors: benchmarkColors,
        seriesDefaults: {
            borderRadius: 0,
            type: 'column',
            cursor: 'default'
        },
        defaults: {
            chart: {
                type: 'column'
            },
            plotOptions: {
                column: {
                    groupPadding: 0,
                    pointPadding: 0.1,
                    lineWidth: 0,
                    shadow: false,
                    borderWidth: 1,
                    dataLabels: {
                        enabled: false
                    },
                    stacking: 'normal'
                },
                spline: {
                    marker: {
                        fillColor: splineFill,
                        lineWidth: 2
                    }
                }
            },
            tooltip: {
                backgroundColor: $.chartDefaults.white,
                shadow: false,
                useHTML: true,
                formatter: function() {
                    return "<span class=\"tooltip\"><b>" +
                    $.hh.nf(this.point.tooltip, chartConfig.metric_unit) + "</b><br/> Gap from target: " + $.hh.nf(this.point.gap, 'percentage') + "%</span>";
                }
            },
            legend: {
                enabled: true,
                floating: true,
                align: 'left',
                verticalAlign: 'top',
                color: $.chartDefaults.labelColor,
                borderColor: $.chartDefaults.white
            }
        }
    });
};