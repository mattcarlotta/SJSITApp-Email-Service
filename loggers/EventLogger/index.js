import chalk from "chalk";

export default emailReminders => `${chalk.rgb(7, 54, 66).bgRgb(38, 139, 210)(" I ")} ${chalk.rgb(
  255,
  255,
  255,
)(`Processed Events... ${emailReminders.length}`)}`;
