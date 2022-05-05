import { api, diaryMapper } from ".";

const prefix = '/diary';

const set = async (params) => {
    const res = await api.post(`${prefix}/`, params);
    return diaryMapper(res.data);
};

const getList = async () => {
    const res = await api.get(`${prefix}/`);
    res.data.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
    return res.data.map(diaryMapper);
};

const get = async (id) => {
    const res = await api.get(`${prefix}/${id}`);
    return diaryMapper(res.data);
};

const put = async (id, params) => {
    const res = await api.put(`${prefix}/${id}`, params);
    return diaryMapper(res.data);
};

const del = async (id) => {
    const res = await api.delete(`${prefix}/${id}`);
    return res.data;
};

export const DiaryAPI = {
    set,
    getList,
    get,
    put,
    del
}