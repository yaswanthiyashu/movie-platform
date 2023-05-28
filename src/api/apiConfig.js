const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '7232e9cb5ca8c7933bc7c4b755e4575b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;