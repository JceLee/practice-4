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

// 라떼를 만들고, 에스프레소를 만드는 것이 아니라 라떼와 에스프레소를 동시에 만든다.
async function makeMultipleCoffees() {
    try {
      const [coffee1, coffee2] = await Promise.all([
        orderCoffee("라떼"),
        orderCoffee("에스프레소")
      ]);
      console.log(coffee1);
      console.log(coffee2);
    } catch (error) {
      console.error(error);
    }
  }
  
makeMultipleCoffees();
  
