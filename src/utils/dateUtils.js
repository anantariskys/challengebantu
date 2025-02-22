export const calculateTimeRemaining = (expiredAt) => {
    const expirationDate = new Date(expiredAt);
    const currentDate = new Date();
    const diffTime = expirationDate - currentDate;
  
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.ceil(diffDays / 30);
    const diffYears = Math.ceil(diffDays / 365);
  
    if (diffYears > 1) {
      return `${diffYears} Years Remaining`;
    } else if (diffMonths > 1) {
      return `${diffMonths} Months Remaining`;
    } else {
      return `${diffDays} Days Remaining`;
    }
  };
  