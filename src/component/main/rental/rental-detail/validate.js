import moment from 'moment'
import { isValidDate } from 'helpers/index';
export const validate = (values, props) => {
    const errors = {}
    if (!values.startAt)
        errors.startAt = 'Hãy chọn ngày đặt phòng'
    if (values.startAt && +moment(values.startAt) - +moment() < 0)
        errors.startAt = 'Ngày đặt phòng không hợp lệ'
    if (!values.endAt)
        errors.endAt = 'Hãy chọn ngày trả phòng'
    if (values.endAt && !values.startAt)
        errors.endAt = 'Hãy chọn ngày đặt phòng'
    if (values.endAt && moment(values.endAt).valueOf() - moment().valueOf() < 0)
        errors.endAt = 'Ngày trả phòng không hợp lệ'
    if(!values.guests)
        errors.guests ="Cần có số người"
    if (values.endAt && moment(values.endAt).valueOf() - moment(values.startAt).valueOf() <= 0)
        errors.endAt = 'Ngày trả phòng không hợp lệ'
    if (values.guests && values.guests > props.people)
        errors.guests = 'Đã vượt số khách tối đa'

    return errors
}