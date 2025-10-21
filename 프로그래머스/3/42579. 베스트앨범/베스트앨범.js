function solution(genres, plays) {
    const genreMap = {};
    
    genres.forEach((g, i) => {
        if (!genreMap[g]) genreMap[g] = {total:0, songs:[]};
        genreMap[g].total += plays[i];
        genreMap[g].songs.push(i);
    });
    
    return Object.values(genreMap)
        .sort((a, b) => b.total - a.total)
        .flatMap(({songs}) =>
            songs.sort((a, b) => plays[b] - plays[a] || a - b).slice(0, 2)
        );
}