import cloneDeep from "lodash.clonedeep";

export function formatDateTime(dateTime) {
    if (!dateTime) {
        dateTime = Date.now();
    }

    if (typeof dateTime === 'string') {
        dateTime = new Date(dateTime);
    }

    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Intl.DateTimeFormat('ko-KR', options).format(dateTime);
}

export function clone(params) {
    return cloneDeep(params);
}