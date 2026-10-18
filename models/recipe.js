export default class Recipe {
  constructor({ id, category, name, durationHours, durationMinutes, description, userId }) {
    this.id = id;
    this.category = Number(category);
    this.name = name;
    this.durationHours = Number(durationHours);
    this.durationMinutes = Number(durationMinutes);
    this.description = description;
    this.userId = userId;
  }
}