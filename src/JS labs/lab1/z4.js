function otpusk(groupSize, groupType, dayOfWeek) {
  let pricePerPerson;

  switch (groupType) {
    case "Студенты":
      switch (dayOfWeek) {
        case "Пятница":
          pricePerPerson = 8.45;
          break;
        case "Суббота":
          pricePerPerson = 9.80;
          break;
        case "Воскресенье":
          pricePerPerson = 10.46;
          break;
        default:
          return "Некорректный день недели";
      }
      break;
    case "Корпоративная":
      switch (dayOfWeek) {
        case "Пятница":
          pricePerPerson = 10.90;
          break;
        case "Суббота":
          pricePerPerson = 15.60;
          break;
        case "Воскресенье":
          pricePerPerson = 16.00;
          break;
        default:
          return "Некорректный день недели";
      }
      break;
    case "Обычная":
      switch (dayOfWeek) {
        case "Пятница":
          pricePerPerson = 15.00;
          break;
        case "Суббота":
          pricePerPerson = 20.00;
          break;
        case "Воскресенье":
          pricePerPerson = 22.50;
          break;
        default:
          return "Некорректный день недели";
      }
      break;
    default:
      return "Некорректный тип группы";
  }

  let totalPrice = groupSize * pricePerPerson;

  if (groupType === "Студенты" && groupSize >= 30) {
    totalPrice *= 0.85; // 15% 
  } else if (groupType === "Корпоративная" && groupSize >= 100) {
    totalPrice -= 10 * pricePerPerson; // если группа >=100, то 10 бесплатно
  } else if (groupType === "Обычная" && groupSize >= 10 && groupSize <= 20) {
    totalPrice *= 0.95; // группа >=10 и <=20, то 5% 
  }

  const formattedPrice = totalPrice.toFixed(2);
  return `Общая цена: ${formattedPrice}`;
}


console.log(otpusk(30,"Студенты", "Воскресенье"));      
console.log(otpusk(40,"Обычная", "Суббота"));  
