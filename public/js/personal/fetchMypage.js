// 사용자 정보로 넘어오는 userId 필요
// 받아온 userId에 해당하는 mypage 정보 받아와서 개인페이지 로딩

export function fetchMypageData() {
  fetch('http://localhost:5000/mypage', {
    method: 'GET',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      const getData = data.data;

      //   const education = getData.
      newInfo(getData, addedName, info);
    })
    .catch((error) => {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
    });
}
