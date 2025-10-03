//create interger array 
    const arr =     [1,2,3,4,5,-6,-9,8,10,-12];
    //create a list of name and sort it alphabetically by
    const names = ["John", "Alice", "Bob", "Charlie"];
    //create and array of object that contains 10 students with id, name, age and grade
   const students = [
        {id: 1, name: "John", age: 20, grade: 8.5},
        {id: 2, name: "Alice", age: 19, grade: 9.0},
        {id: 3, name: "Bob", age: 21, grade: 7.5},
        {id: 4, name: "Charlie", age: 22, grade: 6.0},
        {id: 5, name: "David", age: 20, grade: 8.0},
        {id: 6, name: "Eve", age: 19, grade: 9.5},
        {id: 7, name: "Frank", age: 21, grade: 7.0},
        {id: 8, name: "Grace", age: 22, grade: 6.5},
        {id: 9, name: "Hannah", age: 20, grade: 8.8},
        {id: 10, name: "Ivy", age: 19, grade: 9.2}
    ];
    

export function exercise2(){
    return(

        <div>
            
           
            <h1>Array elements are:</h1>
            <ul>    map {arr.map((num, index) => (
                <li key={index}>{num}</li>
            ))}</ul>
            <h1>tinh tong cac phan tu</h1>
            <p>tong cac phan tu trong mang la: {arr.reduce((acc, num) => acc + num, 0)}</p>
       
            <h1>tinh gia tri trung binh</h1>
            <p>gia tri trung binh cua mang la: {arr.reduce((acc, num) => acc + num, 0) / arr.length}</p>
           <h1>sort names alphabetically</h1>
           <ul> {names.sort().map((name, index) => (
                <li key={index}>{name}</li>
            ))}</ul>
        
            <h1>filter grade greater than 7.0</h1>
            <ul> {students.filter(student => student.grade > 7.0).map((student) => (
                <li key={student.id}>{student.name} - {student.grade}</li>
            ))}</ul>
            <h1>students table</h1>
            <table border="1">
                <thead>
                    <tr>
                       
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <td avg colSpan={4}>Average Grade: { (students.reduce((acc, student) => acc + student.grade, 0) / students.length).toFixed(2)}</td>
                    </tr>
                </tfoot>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.grade}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}
export default exercise2;