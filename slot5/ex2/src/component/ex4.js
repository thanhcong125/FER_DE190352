   
const ages = [12, 17, 22, 34, 15, 19, 45, 13, 27, 30];
const total = ages.reduce((sum, age) => sum + age, 0);
const min = Math.min(...ages);
const max = Math.max(...ages);
const buckets = ages.reduce((acc, age) => {
    if (age >= 13 && age <= 19) {
        acc.teen = (acc.teen || 0) + 1;
    } else if (age >= 20) {
        acc.adult = (acc.adult || 0) + 1;
    }
    return acc;
}, {});

function exercise4() {
    return (
        <div>
            <h2>Exercise 4: Age Statistics</h2>
            <p>Total: {total}</p>   
            <p>Min: {min}</p>
            <p>Max: {max}</p>
            <p>Buckets: {`{ teen: ${buckets.teen || 0}, adult: ${buckets.adult || 0} }`}</p>
        </div>
    );
}
export default exercise4;