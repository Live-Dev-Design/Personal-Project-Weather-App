class Fetch {
  async getCurrent(input) {
    const myKey = "75bf953bdcc45fc02e6e7d03ceac01bf";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
    );

    const data = await response.json();

    // console.log(data);

    return data;
  }
}
