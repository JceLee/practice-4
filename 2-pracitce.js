function preparePizza(type, callback) {
    console.log(`${type} 피자 준비 중...`);
    setTimeout(() => {
      if (type) {
        callback(null, `${type} 피자 준비 완료`);
      } else {
        callback("주문 오류", null);
      }
    }, 3000);
  }
  
preparePizza("페퍼로니", (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});
  
  