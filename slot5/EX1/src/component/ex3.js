const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};
// Cho person như dưới. Dùng destructuring để lấy street, city (mặc định "Unknown City" nếu không có).
function exercide3() {
    return (
        <div>
            <h2>Exercise 3</h2>
            <p>This is the content of Exercise 3 component.</p>
            <h3>Destructuring</h3>
            <p>Street: {person.address.street}</p>
            <p>City: {person.address.city || "Unknown City"}</p>
        </div>
    );
}
export default exercide3;