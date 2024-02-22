import IUtilities from "../../interfaces/utils/utils.interface";
class Utilities implements IUtilities {
  randomCharacter(len: number): string {
    let character = "";
    do {
      character += Math.random().toString(36).substring(2);
    } while (character.length < len);
    return character;
  };
  randomNumber(): number {
    let random = Cypress._.random(0, 1e12);
    return random;
  };
  currentDate(): string {
    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    const formattedCurrentDate = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`;
    return formattedCurrentDate;
  };
};
export default Utilities;
