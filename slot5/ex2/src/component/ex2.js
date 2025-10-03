

const people = [
    { name: "John", age: 15 },
    { name: "Jane", age: 22 },
    { name: "Mike", age: 17 },
    { name: "Emily", age: 19 },
    { name: "Tom", age: 12 }
];
// Sử dụng phương thức filter để lọc những người tuổi 13-19
const teenagers = people.filter(person => person.age >= 13 && person.age <= 19);
export function exercise2(){
    return(

        <div>
            <h2>Exercise 2: Teenagers List</h2>
            <ul>
                {teenagers.map((teen, index) => (
                    <li key={index}>{teen.name} - {teen.age} years old</li>
                ))}
            </ul>
        </div>

    );
}
export default exercise2;