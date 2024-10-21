function preparePizza(type) {
    return new Promise((resolve, reject) => {
      console.log(`${type} 피자 준비 중...`);
      setTimeout(() => {
        if (type) {
          resolve(`${type} 피자 준비 완료`);
        } else {
          reject("주문 오류");
        }
      }, 3000);
    });
}
  
  

// 두 개의 피자를 동시에 주문하고, 두 피자가 모두 준비되면 결과를 출력하세요. Promise.all을 사용하세요.