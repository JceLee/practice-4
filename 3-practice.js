function prepareTea(type) {
    return new Promise((resolve, reject) => {
      console.log(`${type} 차 준비 중...`);
      setTimeout(() => {
        if (type) {
          resolve(`${type} 차 준비 완료`);
        } else {
          reject("주문 오류");
        }
      }, 2000);
    });
  }
  

// 이 부분을 async / await 를 이용한 방식으로 변경해주세요.

prepareTea("홍차")
    .then(result => console.log(result))
    .catch(error => console.error(error));