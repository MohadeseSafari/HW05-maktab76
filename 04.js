function mostExpensive(obj) {
    let array = Object.values(obj);
    let maxPrice= Math.max(...array);
    let keyMostExpensive = Object.keys(obj).find(key => obj[key] === maxPrice)
    return `The most expensive one is the ${keyMostExpensive}`
    
  }
  console.log(mostExpensive({
      "Diamond Earrings": 980,
      "Gold Watch": 250,
      "Pearl Necklace": 4650
      }));
  
  console.log(mostExpensive({
      "Silver Bracelet": 280,
      "Gemstone Earrings": 180,
      "Diamond Ring": 3500
  }));
  