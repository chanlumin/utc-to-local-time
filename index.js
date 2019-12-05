

/**
 * 时区偏差（time-zone offset）表示协调世界时（UTC）与本地时区之间的差值，单位为分钟。需要注意的是如果本地时区晚于协调世界时，则该差值为正值，如果早于协调世界时则为负值。例如你所在时区为 UTC+10（澳大利亚东部标准时间），将会返回 -600。对于同一个时区，夏令时（Daylight Saving Time）将会改变这个值。
 * 
 * 把utc时间转成本地时间
 * 
 * 返回时间戳
 * @param {string} utcTime utc时间
 */
export default function utcToLocalTime(utcTime) {
    if(!utcTime) {
      return
    }
    const d = new Date()
    const originTime = new Date(utcTime).getTime()
    const offsetTime = d.getTimezoneOffset() * 60 * 1000
    const transformTime =  originTime + offsetTime
    return transformTime
}


// console.log(new Date(utcToLocalTime('2019-12-04T20:32:52.000+0000')))