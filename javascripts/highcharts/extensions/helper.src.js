$.helper = {
      lineConnector: function(lineData) {
          var theme = $.columnChartTheme();
          var lineConnectorOptions = {
              type: 'line',
              data: [],
              dashStyle: 'dash',
              marker: {
                  enabled: false
              },
              lineWidth: 0.5,
              shadow: false,
              enableMouseTracking: false
          };
          return $.extend(lineConnectorOptions, {
              data: lineData
          });
      }
};
