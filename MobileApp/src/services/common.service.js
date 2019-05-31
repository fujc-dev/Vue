
var CommandService = {

    toPercent: function (point) {
        var str = Number(point * 100).toFixed(2);
        str += "%";
        return str;
    },
    /**
     * 设置EChart选中值
     * @param {*} chart 
     * @param {*} lastIndex 
     * @param {*} dataIndex 
     */
    setDispatchAction: function (chart, lastIndex, dataIndex) {
        chart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: lastIndex });
        chart.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: dataIndex });
    }
};

export { CommandService }