
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
      statusMessage: "behöver mat!",
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
    statusMessage: "är mätt",
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




// Gammla funktionen innan refaktorering
export const getFeedingStatus_x = (lastFed: string, viewType: 'detail' | 'overview') => {
  const lastFedDate = new Date(lastFed);
  const now = new Date();
  const hoursAgo = (now.getTime() - lastFedDate.getTime()) / (1000 * 60 * 60);
  
  // Regler för detaljsidan för ett djur
  const detailWarningHours = 3;
  const detailHungryHours = 4;

  // Regler för översiktssidan med alla djur
  const overviewWarningHours = 3;
  const overviewHungryHours = 5;

  // Välj rätt regler beroende på viewType
  const warningHours = viewType === 'detail' ? detailWarningHours : overviewWarningHours;
  const hungryHours = viewType === 'detail' ? detailHungryHours : overviewHungryHours;

  // Beräkna när djuret kan matas igen
  const canFeedAgain = new Date(lastFedDate.getTime() + (hungryHours * 60 * 60 * 1000));

  // Formatera ett datum-objekt till "YYYY-MM-DD HH:MM"
  const formatDate = (date: Date) => date.toLocaleString('sv-SE', {
    year: 'numeric',
    month: '2-digit', 
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  return {
    hoursAgo,
    canFeed: hoursAgo >= hungryHours,
    needsFeeding: hoursAgo >= warningHours,
    lastFedFormatted: formatDate(lastFedDate),
    canFeedAgain: formatDate(canFeedAgain),
    statusMessage: hoursAgo >= hungryHours
      ? "behöver mat!" 
      : hoursAgo >= hungryHours 
        ? "kommer snart behöva mat"
        : "är mätt",
    statusClass: hoursAgo >= hungryHours
      ? "status--hungry" 
      : hoursAgo >= warningHours 
        ? "status--starving" 
        : "status--fed"
  };
};

