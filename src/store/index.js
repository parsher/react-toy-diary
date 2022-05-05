import { atom } from 'recoil';

export const diaryListState = atom({
    key: 'diaryListState',
    default: [],
});

export const userState = atom({
    key: 'userState',
    default: {},
});

