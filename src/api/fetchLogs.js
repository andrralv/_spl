export const fetchLogs = async () => {
  try {
  const response = await fetch('../logs.json');
  const logs = await response.json();
  return logs;
  } catch (e) {
    console.error('Failed to fetch');
  }
};