
// Beräkna tid
export const calculateHoursSince = (dateStr: string): number => {
  const date = new Date(dateStr);
  const now = new Date();
  return (now.getTime() - date.getTime()) / (1000 * 60 * 60);
}

// Hämta regler
export const getFeedingRules = (viewType: 'detail' | 'overview') => {
  return viewType === 'detail'
    ? { warningHours: 3, hungryHours: 4 }
    : { warningHours: 3, hungryHours: 5 };
}

// Status-logik
export const getFeedingStatusInfo = (hoursAgo: number, rules: { warningHours: number, hungryHours: number }) => {
  if (hoursAgo >= rules.hungryHours) {
    return {
      canFeed: true,
      statusMessage: "behöver mat omgående!",
      statusClass: "status--hungry"
    };
  }
  if (hoursAgo >= rules.warningHours) {
    return {
      canFeed: false,
      statusMessage: "kommer snart behöva mat",
      statusClass: "status--warning"
    };
  }
  return {
    canFeed: false,
    statusMessage: "har fått mat och är nöjd",
    statusClass: "status--fed"
  };
}

// Formatera ett datum-objekt till "YYYY-MM-DD HH:MM"
const formatFeedingDate = (date: Date) => date.toLocaleString('sv-SE', {
  year: 'numeric',
  month: '2-digit', 
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
});

// One function to rule them all
export const getFeedingStatus = (lastFed: string, viewType: 'detail' | 'overview') => {
  const hoursAgo =  calculateHoursSince(lastFed);
  const rules = getFeedingRules(viewType);
  const statusInfo = getFeedingStatusInfo(hoursAgo, rules);

  const lastFedDate = new Date(lastFed);
  const canFeedAgain = new Date(lastFedDate.getTime() + (rules.hungryHours * 60 * 60 * 1000));

  return {
    hoursAgo,
    ...statusInfo,
    needsFeeding: hoursAgo >= rules.warningHours,
    lastFedFormatted: formatFeedingDate(lastFedDate),
    canFeedAgain: formatFeedingDate(canFeedAgain)
  };
}
