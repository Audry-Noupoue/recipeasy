import auth from './auth.js';
import Recipe from '../models/recipe.js';

class RecipeService {

  async getAll() {
    const response = await fetch('http://martha.jh.shawinigan.info/queries/select-recipes/execute', {
      method: 'POST',
      headers: {
        'auth': 'YXVkcnk6NjNGMzJlZjExY2I4YjhhNTc1MGNhNSphNjll',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: auth.currentUser.id })
    });

    if (!response.ok) throw new Error('HTTP ' + response.status);

    const resultat = await response.json();

    if (!resultat.success) throw new Error('Impossible de récupérer les recettes');

    return resultat.data.map((recette) => new Recipe({
      id: recette.id,
      category: recette.category,
      name: recette.name,
      durationHours: recette.duration_hours,
      durationMinutes: recette.duration_minutes,
      description: recette.description,
      userId: recette.user_id
    }));
  }

  async create(recette) {
    const response = await fetch('http://martha.jh.shawinigan.info/queries/insert-recipe/execute', {
      method: 'POST',
      headers: {
        'auth': 'YXVkcnk6NjNGMzJlZjExY2I4YjhhNTc1MGNhNSphNjll',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category: recette.category,
        name: recette.name,
        duration_hours: recette.durationHours,
        duration_minutes: recette.durationMinutes,
        description: recette.description,
        user_id: auth.currentUser.id
      })
    });

    if (!response.ok) throw new Error('HTTP ' + response.status);

    const resultat = await response.json();

    if (!resultat.success) throw new Error('Impossible de créer la recette');

    return resultat.success;
  }

}

const service = new RecipeService();
export default service;