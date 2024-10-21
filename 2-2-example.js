function orderCoffee(order) {
    return new Promise((resolve, reject) => {
      console.log(`${order} 커피 주문 중...`);
      setTimeout(() => {
        if (order) {
          resolve(`${order} 커피 준비 완료`);
        } else {
          reject("주문 오류");
        }
      }, 2000);
    });
  }
  
orderCoffee("카푸치노")
.then(result => console.log(result))
.catch(error => console.error(error));
  
  