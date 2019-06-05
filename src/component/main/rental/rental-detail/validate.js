import moment from 'moment'
import { isValidDate } from 'helpers/index';
export const validate = (values, props) => {
    const errors = {}

    if (!values.startAt)
        errors.startAt = 'Hãy chọn ngày đặt phòng'
    if (!values.endAt)
        errors.endAt = 'Hãy chọn ngày trả phòng'
    if(!values.guests)
        errors.guests ="Cần có số người"
    // if (values.endAt && values.startAt && (moment(values.startAt).format("YYYY-MM-DD") > moment(values.endAt).format("YYYY-MM-DD")))
    // {
    //     console.log(moment(values.startAt).format("YYYY-MM-DD") > moment(values.endAt).format("YYYY-MM-DD"))
    //     errors.endAt = 'Ngày trả phòng không hợp lệ'
    // }
    if (values.guests && values.guests > props.people)
        errors.guests = 'Đã vượt số khách tối đa'

    return errors
}