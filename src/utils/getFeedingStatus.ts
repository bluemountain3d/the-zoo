export const getFeedingStatus = (lastFed: string, viewType: 'detail' | 'overview') => {
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

  });
  
  return {
    hoursAgo,
    canFeed: hoursAgo >= hungryHours,
    needsFeeding: hoursAgo >= warningHours,
    lastFedFormatted: formatDate(lastFedDate),
    canFeedAgain: formatDate(canFeedAgain),
    statusMessage: hoursAgo >= hungryHours
      ? "Djuret behöver mat!" 
      : hoursAgo >= hungryHours 
        ? "Djuret kommer snart behöva mat"
        : "Djuret är mätt",
    statusClass: hoursAgo >= hungryHours
      ? "status--hungry" 
      : hoursAgo >= warningHours 
        ? "status--warning" 
        : "status--fed"
  };
};