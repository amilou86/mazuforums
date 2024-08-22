export const formatDateTimeInCAT = (date) => {
  // Example of converting date to CAT (UTC+2)
  const offset = 2; // CAT is UTC+2
  const catDate = new Date(date.getTime() + offset * 60 * 60 * 1000);
  return catDate.toLocaleString('en-ZA', { timeZone: 'Africa/Nairobi' });
};