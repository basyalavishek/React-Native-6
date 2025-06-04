class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // {location has  these propeerties => lat : 0.1456 , lng : 134.26}
    this.id = new Date().toString() + Math.random.toString();
  }
}
