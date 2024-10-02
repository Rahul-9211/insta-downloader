export function formatDateToShortString(isoDateString: string): string {
    const date = new Date(isoDateString);
  
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date format');
    }
  
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }