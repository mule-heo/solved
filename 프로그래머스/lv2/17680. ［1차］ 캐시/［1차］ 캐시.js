function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5;
    
    const cache = [];
    let time = 0;
    for (let i=0;i<cities.length;i++){
        let city = cities[i].toLowerCase();
        let index = cache.indexOf(city);
        if (index+1){
            cache.splice(index, 1);
            cache.push(city);
            time++;
            continue;
        } else {
            if (cacheSize === cache.length){
                cache.shift();
                cache.push(city);
                time += 5;
                continue;
            } else {
                cache.push(city);
                time += 5;
                continue;
            }
        }
    }
    return time;
}