//tinh ham double
const double = (x) => x * 2;

//check if even
const isEven = (x) => x % 2 === 0;

function exercise1(){
    return(
        <div>
      <h1>double of 4 is {double(4)}</h1>
      <p>is 4 even  {isEven(4) ? "la so chan" : "la so le"}</p>
    </div>
    );
}
export default exercise1;