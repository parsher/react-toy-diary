

export function formatDateTime(dateTime) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Intl.DateTimeFormat('ko-KR', options).format(dateTime ? dateTime : Date.now());
}