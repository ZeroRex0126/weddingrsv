export async function getWebSettingData() {
  const response = await fetch("/api/webdata", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

export function getRemainingDate(data) {
  if (data && data !== {}) {
    let currentDate = new Date();
    let wedDate = new Date(data.year, data.month, data.day);
    let remaining = new Date(wedDate.getTime() - currentDate.getTime());

    var seconds = Math.floor((wedDate - currentDate) / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var dayscal = Math.floor(hours / 24);
    var days = remaining.getUTCDate() - 1;
    var years = remaining.getUTCFullYear() - 1970; // Gives difference as year
    var months = remaining.getUTCMonth(); // Gives month count of difference

    hours = hours - dayscal * 24;
    minutes = minutes - dayscal * 24 * 60 - hours * 60;
    seconds = seconds - dayscal * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

    console.log(`remaining time = ${years} years, ${months} month, days ${days}, ${hours} hours, ${minutes} min, seconds ${seconds}`)
  }
}
