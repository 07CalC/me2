
type Contribution = {
  date: string;
  count: number;
  level: number;
};



export default async function Heatmap() {
  const res: Promise<Contribution[]> = await
    fetch("https://github-contributions-api.jogruber.de/v4/07calc?y=last")
      .then((res) => res.json())
      .then((data) => data.contributions);
  const contributions: Contribution[] = await res;

  const weeks: Contribution[][] = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  const monthLabels = weeks.map((week, i) => {
    const day = week[0];
    if (!day?.date) return "";

    const date = new Date(day.date);
    const month = date.toLocaleString("default", { month: "short" });

    const prev = weeks[i - 1]?.[0];
    const prevMonth = prev ? new Date(prev.date).getMonth() : null;

    if (prevMonth !== null && date.getMonth() === prevMonth) {
      return "";
    }

    return month;
  });

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; ``

  const levelColors = [
    "bg-[#ffffff0A]",
    "bg-[#ffffff33]",
    "bg-[#ffffff66]",
    "bg-[#ffffff99]",
    "bg-[#ffffff]",
  ];

  return (
    <>
      <div className="max-w-full overflow-x-auto">
        <div className="flex gap-2 sm:gap-5 md:ml-[36px] text-lg text-muted-foreground mb-2">
          {monthLabels.map((label, i) => (
            <div key={i} className="md:w-[clamp(12px,3vw,20px)] text-center">
              {label}
            </div>
          ))}
        </div>

        <div className="flex gap-1 min-w-fit">
          <div className="hidden sm:flex flex-col gap-1 mr-2 text-sm text-muted-foreground mt-[5px]">
            {weekdays.map((day) => (
              <div key={day} className="h-[clamp(12px,3vw,20px)] w-8 text-right pr-1">
                {day}
              </div>
            ))}
          </div>

          {weeks.map((week, i) => (
            <div key={i} className="flex flex-col gap-1">
              {[...Array(7)].map((_, j) => {
                const day = week[j];
                return (
                  <div
                    key={j}
                    title={
                      day?.date
                        ? `${day.count} contributions on ${new Date(day.date).toLocaleDateString("en-IN")}`
                        : ""
                    }
                    className={`rounded-sm w-[clamp(12px,3vw,20px)] h-[clamp(12px,3vw,20px)] ${day ? levelColors[day.level] : "bg-transparent"}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="border-b sm:hidden border-white w-full my-4" />
    </>


  )
}
