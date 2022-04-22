
const dataList = [];

const contentsList = [
    { title: '오늘의 일기', content: '오늘 너무너무 재미있었다.', mood: 'smile', weather: 'sun' },
    { title: '오늘 본 영화', content: '매우 즐거운 영화였다.', mood: 'grin', weather: 'cloud' },
    { title: '오늘 운동', content: '운동이 너무 힘들어서 죽을 것 같았다.', mood: 'evil', weather: 'rain' },
]

function getRandomBetween(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let dateTime = Date.now()
for (let i = 1; i <= 100; i++) {
    dateTime -= 100000000;
    dataList.push({
        id: String(i),
        dateTime,
        ...contentsList[getRandomBetween(contentsList.length - 1, 0)]
    });
}

export const Data = {
    list: dataList,
    user: {
        name: '홍',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png'
    }
};