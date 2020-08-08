export default function convertHourToMinutes(time: string) {
  const [hour, minutes] = time.split(":").map(Number);
  const timesToMinutes = hour * 60 + minutes;
  return timesToMinutes;
}
