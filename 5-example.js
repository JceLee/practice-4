async function fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1212121");
      if (!response.ok) {
        throw new Error("네트워크 응답 오류");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("에러 발생:", error);
    }
}
  
fetchData();