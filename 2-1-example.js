function orderCoffee(order, callback) {
    console.log(`${order} 커피 주문 중...`);
    setTimeout(() => {
      if (order) {
        callback(null, `${order} 커피 준비 완료`);
      } else {
        callback("주문 오류", null);
      }
    }, 2000);
}
  
orderCoffee("아메리카노", (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
});
  