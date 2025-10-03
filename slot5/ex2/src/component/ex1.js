const ages = [33, 12, 20, 16];

const [first, , third = 0, ...restAges] = ages;


function exercise1(){
    return(
        <div>
      {/* <h1>excercise 4{double(4)}</h1> */}
      <h1>first: {first}</h1>
      <h1>third: {third}</h1>
      <h1>restAges: {restAges}</h1>
      
    </div>
    );
}
export default exercise1;