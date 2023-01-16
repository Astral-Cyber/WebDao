
export default function DateFormat(date) {
    let year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    return `${year}-${month}-${day}`;
}