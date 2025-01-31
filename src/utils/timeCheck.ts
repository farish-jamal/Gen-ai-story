export const timeOfTheDay = (): string => {
  const currentTime = new Date().getHours();
  if (currentTime >= 6 && currentTime < 12) {
    return "Morning";
  } else if (currentTime >= 12 && currentTime < 18) {
    return "Afternoon";
  } else if (currentTime >= 18 && currentTime < 24) {
    return "Evening";
  } else {
    return "Night";
  }
};
