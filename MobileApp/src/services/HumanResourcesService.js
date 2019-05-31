import axios from "axios";
import { Config } from './Config.js'
import { ErrorService } from './ErrorService.js'
import { CommandService } from './common.service.js'


let HTTP_HOST_HrData = Config.HTTP_HOST + "/HrData/"
var HumanResourcesService = {
    /**
     * 人力资源发展趋势分析
     */
    GetHrDevpTrend: function () {
        return new Promise((resolve) => {
            axios.get(HTTP_HOST_HrData + "GetHrDevpTrend?szClass=A1").then(response => {
                let _result = [];
                let _ = response.data;
                //将数组按顺序 两两组合
                let _index_length = 2;
                let _current_length = 0;
                //整除，获取组合后的数组长度
                var _index_count = _.length / _index_length;
                for (let index = 0; index < _index_count; index++) {
                    let _r = {};
                    //获取第一个索引的结果
                    _r.element_name = _[_current_length].content;
                    _current_length += 1;
                    //获取下一个索引的结果
                    _r.content = _[_current_length].content;
                    _current_length += 1;
                    //填充数据
                    _result.push(_r);
                }
                resolve(_result);

            }).catch(ErrorService.handleError);
        });
    },

    /**
     * 获取集团总人数、在册人数、男女人数、平均年龄
     */
    GetHrCountStatictis: function () {
        return new Promise((resolve) => {
            let _countStatictis = {
                "average_age": "",
                "female": "",
                "male": "",
                "total_group_number": "",
                "number_of_persons_on_record": "",
            };
            axios.get(HTTP_HOST_HrData + "GetHrCountStatictis").then(response => {
                let _r = response.data;
                _countStatictis["total_group_number"] = _r[5].statistics;
                _countStatictis.number_of_persons_on_record = _r[6].statistics;
            }).catch(ErrorService.handleError);
            axios.get(HTTP_HOST_HrData + "GetSexualDistribute").then(response => {
                let _r = response.data;
                //console.log(response.data);
                _countStatictis.male = _r[0][0].yData;
                _countStatictis.female = _r[0][1].yData;
                _countStatictis.average_age = _r[1][0].match(Config.reg)[0]; //总人口数 _r[1][0].substr(_r[1][0].indexOf("\r\n\n"), _r[1][0].length);
            }).catch(ErrorService.handleError);
            resolve(_countStatictis);
        });
    },


    /**
     * 职级分布业务处理
     */
    GetHrPostDistribute: function () {
        return new Promise((resolve) => {
            axios.get(HTTP_HOST_HrData + "GetHrPostDistribute").then(response => {
                let _result = {};
                let _r = response.data;
                _result.distributes = _r[0];
                _result.summber = _r[1];
                let _summber = _r[1][0];
                let _percentage = parseInt(_summber.match(Config.reg)[0]); //总人口数 parseInt(_summber.substr(_summber.indexOf("\r\n\n"), _summber.length)); //总人口数
                _result.summber = _percentage;
                _result.remark1 = _r[2];
                _result.remark2 = _r[3];
                _result.remark3 = _r[4];
                //计算百分比
                _result.distributes.forEach(element => {
                    element.xData = element.xData.replace(/\s/g, '');
                    element.percentage = CommandService.toPercent(parseInt(element.yData) / _percentage);
                });
                resolve(_result);
            }).catch(ErrorService.handleError);
        });
    },
    /**
         * 学历情况统计
         */
    GetHrQualificationsDistribute: function () {
        return new Promise((resolve) => {
            axios.get(HTTP_HOST_HrData + "GetHrQualificationsDistribute").then(response => {
                let _result = {};
                let _r = response.data;
                _result.distributes = _r[0];
                let _summber = _r[1][0];
                let _percentage = parseInt(_summber.match(Config.reg)[0]); //总人口数
                _result.summber = _percentage;
                _result.remark1 = _r[2];
                _result.remark2 = _r[3];
                _result.remark3 = _r[4];
                //计算百分比
                _result.distributes.forEach(element => {
                    element.percentage = CommandService.toPercent(parseInt(element.yData) / _percentage);
                });
                resolve(_result);
            }).catch(ErrorService.handleError);
        });

    }
};


export { HumanResourcesService };