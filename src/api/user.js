import { api, diaryMapper, idMapper } from ".";

const prefix = '/user';

const set = async (params) => {
    const res = await api.post(`${prefix}/`, params);
    res.data.diaryList = res.data.diaryList.map(diaryMapper);
    return idMapper(res.data);
};

const getList = async () => {
    const res = await api.get(`${prefix}/`);
    return res.data.map(idMapper).map((user) => {
        user.diaryList = user.diaryList.map(diaryMapper);
        return user;
    });
};

const get = async (id) => {
    const res = await api.get(`${prefix}/${id}`);
    res.data.diaryList = res.data.diaryList.map(diaryMapper);
    return idMapper(res.data);
};

const put = async (id, params) => {
    const res = await api.put(`${prefix}/${id}`, params);
    res.data.diaryList = res.data.diaryList.map(diaryMapper);
    return idMapper(res.data);
};

const del = async (id) => {
    const res = await api.delete(`${prefix}/${id}`);
    return res.data;
};

export const UserAPI = {
    set,
    getList,
    get,
    put,
    del
}