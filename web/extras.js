"use strict";
const comparison = document.createElement("div");
$("result").after(comparison);
const compare = document.createElement("button");
compare.textContent = "Compare all policies";
document.querySelector(".actions").append(compare);
compare.onclick = () => {
  try {
    const rows = ["FCFS", "SJF", "SRTF", "Priority", "Round Robin"].map(
      (policy) => {
        const s = Engine.schedule(
          $("data").value,
          policy,
          Number($("quantum").value),
        );
        return [policy, num(s.averageWaiting), num(s.averageTurnaround)];
      },
    );
    comparison.innerHTML =
      "<h2>Policy comparison</h2>" +
      table(["Policy", "Average waiting", "Average turnaround"], rows);
    $("error").textContent = "";
  } catch (e) {
    $("error").textContent = e.message;
    comparison.innerHTML = "";
  }
};
$("data").addEventListener("input", () => (comparison.innerHTML = ""));
$("reset").addEventListener("click", () => (comparison.innerHTML = ""));
