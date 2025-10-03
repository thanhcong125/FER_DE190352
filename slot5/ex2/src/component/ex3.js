//Cho companies (name, category, start, end).
const companies = [
    { name: "Company A", category: "Finance", start: 1981, end: 2004 },
    { name: "Company B", category: "Retail", start: 1992, end: 2008 },
    { name: "Company C", category: "Auto", start: 1999, end: 2007 },
    { name: "Company D", category: "Retail", start: 1989, end: 2010 },
    { name: "Company E", category: "Technology", start: 2009, end: 2014 },
    { name: "Company F", category: "Finance", start: 1987, end: 2010 },
    { name: "Company G", category: "Auto", start: 1986, end: 1996 },
    { name: "Company H", category: "Technology", start: 2011, end: 2016 },
];

// const sortedCompanies = [...companies].sort((a, b) => a.end - b.end);
//In 3 công ty đầu theo định dạng "Company - EndYear"
const sortedconpamies = [...companies].sort((a, b) => b.end - a.end);
const printCompanies =sortedconpamies .slice(0, 3).map(company => `${company.name} - ${company.end}`);


function exercide3() {
    return (
        <div>
          <h2> in ra 3 cong ty </h2>
          <ul>
               {printCompanies.map((comp, index) => (
                    <li key={index}>{comp}</li>
                ))}
          </ul>
            <h2>Exercise 3: Top 3 Companies by End Year</h2>
            {/* <ul>
                {printCompanies.map((comp, index) => (
                    <li key={index}>{comp}</li>
                ))}
            </ul> */}
            <h2> sort companies</h2>
            {/* <ul>
                {sortedCompanies.map((comp, index) => (
                    <li key={index}>{comp.name} - {comp.end}</li>
                ))}
            </ul> */}
        </div>
    );
}
export default exercide3;