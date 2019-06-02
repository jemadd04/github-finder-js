// Create ES6 class
class Github {
  constructor() {
    this.client_id = 'c724aa67f448ab163117';
    this.client_secret = '3349e8ca26e21dd5bd24c14c0b507d5c30f63503';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
