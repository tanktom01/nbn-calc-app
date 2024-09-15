export function secondsToHms(seconds: number): string {
  const h = Math.floor(seconds / 3600); // 1 hour = 3600 seconds
  const m = Math.floor((seconds % 3600) / 60); // 1 minute = 60 seconds
  const s = Math.floor(seconds % 60); // Remaining seconds

  // Pad with leading zeros if necessary
  const hDisplay = h.toString().padStart(2, "0");
  const mDisplay = m.toString().padStart(2, "0");
  const sDisplay = s.toString().padStart(2, "0");

  return `${hDisplay}:${mDisplay}:${sDisplay}`;
}

export const calculateTime = (
  segment: string,
  grandDownloadTotalMB: number,
  grandUploadTotalMB: number,
  indGrandDownloadTotalMB: number,
  indGrandUploadTotalMB: number,
  dwSpeed: number,
  upSpeed: number,
  utilfinalmodifier: number
) => {
  let dwtime1: number;
  let uptime1: number;

  if (segment === "Fileseg-1") {
    dwtime1 = grandDownloadTotalMB / dwSpeed;
    uptime1 = grandUploadTotalMB / upSpeed;
  } else {
    dwtime1 = indGrandDownloadTotalMB / dwSpeed;
    uptime1 = indGrandUploadTotalMB / upSpeed;
  }

  const dwtime2 = dwtime1 * utilfinalmodifier;
  const uptime2 = uptime1 * utilfinalmodifier;

  const dwtime3 = secondsToHms(dwtime2);
  const uptime3 = secondsToHms(uptime2);

  return { dwtime3, uptime3 };
};
